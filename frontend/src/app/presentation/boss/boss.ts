import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Boss } from '../../domain/models/boss/boss.model';
import { GetAllBossUseCase } from '../../application/usecases/boss/getAllBoss.usecase';

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

  constructor(
    private readonly getAllBossUseCase: GetAllBossUseCase,
    private readonly cdr: ChangeDetectorRef,
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
}