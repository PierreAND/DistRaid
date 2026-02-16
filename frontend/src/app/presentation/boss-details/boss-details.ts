import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Boss } from '../../domain/models/boss/boss.model';
import { GetOneBossUseCase } from '../../application/usecases/boss/getOneBoss.usecase';
declare const $WowheadPower: any;

@Component({
  selector: 'app-boss-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './boss-details.html',
  styleUrl: './boss-details.scss',
})


export class BossDetail implements OnInit {
  boss: Boss | null = null;
  errorMessage = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly getOneBossUseCase: GetOneBossUseCase,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadBoss(id);
  }

  loadBoss(id: number): void {
    this.getOneBossUseCase.execute(id).subscribe({
      next: (data) => {
        this.boss = data;
        this.cdr.detectChanges();
        this.refreshWowheadTooltips();
      },
      error: (err) => {
        console.error('Erreur chargement boss', err);
        this.errorMessage = 'Impossible de charger ce boss';
        this.cdr.detectChanges();
      },
    });
  }

  private refreshWowheadTooltips(): void {
    setTimeout(() => {
      if (typeof $WowheadPower !== 'undefined') {
        $WowheadPower.refreshLinks();
      }
    }, 100);
  }
}
