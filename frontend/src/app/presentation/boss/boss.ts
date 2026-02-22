import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Boss } from '../../domain/models/boss/boss.model';
import { GetAllBossUseCase } from '../../application/usecases/boss/getAllBoss.usecase';
import { GetMyHeroicMarksUseCase } from '../../application/usecases/dkp/getMyHeroicMarks.usecase';
import { SetHeroicMarksUseCase } from '../../application/usecases/dkp/setHeroicMarks.usecase';

@Component({
  selector: 'app-boss',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './boss.html',
  styleUrl: './boss.scss',
})
export class BossComponent implements OnInit {
  bosses: Boss[] = [];
  errorMessage = '';
  marksWanted = 0;
  marksReceived = 0 ;
  marksSaving = false
  successMessage  = '';
  marksMax = 5

  constructor(
    private readonly getAllBossUseCase: GetAllBossUseCase,
    private readonly cdr: ChangeDetectorRef,
    private readonly getMyHeroicMarks: GetMyHeroicMarksUseCase,
    private readonly setHeroicMarks: SetHeroicMarksUseCase,
  ) {}

  ngOnInit(): void {
    this.loadBosses();
  }

  loadBosses(): void {
    this.getAllBossUseCase.execute().subscribe({
      next: (data) => {
        this.bosses = data;
        console.log(this.bosses);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erreur chargement boss', err);
        this.errorMessage = 'Impossible de charger les boss';
        this.cdr.detectChanges();
      },
    });
  }
  loadMyMarks(): void {
    this.getMyHeroicMarks.execute().subscribe({
      next: (data) => {
        this.marksWanted = data.quantity;
        this.marksReceived = data.received;
        this.cdr.detectChanges();
      },
    });
  }
  setMarks(quantity: number): void {
  if (quantity < 0 || quantity > this.marksMax) return;
  this.marksSaving = true;
  this.setHeroicMarks.execute(quantity).subscribe({
    next: () => {
      this.marksWanted = quantity;
      this.marksSaving = false;
      this.successMessage = `Besoin mis à jour : ${quantity} marque(s)`;
      this.cdr.detectChanges();
      setTimeout(() => { this.successMessage = ''; this.cdr.detectChanges(); }, 2000);
    },
    error: (err) => {
      this.errorMessage = err.error?.message || 'Erreur';
      this.marksSaving = false;
      this.cdr.detectChanges();
    },
  });
}
incrementMarks(): void {
  if (this.marksWanted < this.marksMax) this.setMarks(this.marksWanted + 1);
}

decrementMarks(): void {
  if (this.marksWanted > 0) this.setMarks(this.marksWanted - 1);
}

get marksRemaining(): number {
  return Math.max(0, this.marksWanted - this.marksReceived);
}
}