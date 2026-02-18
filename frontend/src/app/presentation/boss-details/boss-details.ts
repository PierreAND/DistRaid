import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Boss } from '../../domain/models/boss/boss.model';
import { GetOneBossUseCase } from '../../application/usecases/boss/getOneBoss.usecase';
import { AddOneLootUseCase } from '../../application/usecases/loots/addOneLoot.usecase';
import { GetLootCandidatesByBossUseCase } from '../../application/usecases/dkp/getLootCandidateBoss.usecase';
import { LootWithCandidates } from '../../domain/models/dkp/dkp.model';
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
  sucessMessage = '';
  addingLootId: number | null = null;
  lootCandidatesMap: Record<number, LootWithCandidates> = {};
  expandedLootId: number | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly getOneBossUseCase: GetOneBossUseCase,
    private readonly cdr: ChangeDetectorRef,
    private readonly addOneLootUseCase: AddOneLootUseCase,
    private readonly getLootCandidates: GetLootCandidatesByBossUseCase,
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
        this.loadCandidates(id);
      },
      error: (err) => {
        console.error('Erreur chargement boss', err);
        this.errorMessage = 'Impossible de charger ce boss';
        this.cdr.detectChanges();
      },
    });
  }

  loadCandidates(bossId: number): void {
    this.getLootCandidates.execute(bossId).subscribe({
      next: (loots) => {
        this.lootCandidatesMap = {};
        loots.forEach((loot) => {
          this.lootCandidatesMap[loot.id] = loot;
        });
        this.cdr.detectChanges();
      },
    });
  }

  getCandidates(lootId: number) {
    return this.lootCandidatesMap[lootId]?.candidates ?? [];
  }

  getTopCandidate(lootId: number) {
    const candidates = this.getCandidates(lootId);
    return candidates.length > 0 ? candidates[0] : null;
  }

  toggleCandidates(lootId: number): void {
    this.expandedLootId = this.expandedLootId === lootId ? null : lootId;
  }

  addLoot(lootId: number): void {
    this.addingLootId = lootId;
    this.clearMessages();

    this.addOneLootUseCase.execute(lootId).subscribe({
      next: () => {
        this.sucessMessage = 'Loot Ajouté à votre wishList ! ';
        this.addingLootId = null;
        if (this.boss) this.loadCandidates(this.boss.id);
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = err.error?.message || "Erreur lors de l'ajout";
        this.addingLootId = null;
        this.cdr.detectChanges();
      },
    });
  }

  private clearMessages(): void {
    this.errorMessage = '';
    this.sucessMessage = '';
  }

  private refreshWowheadTooltips(): void {
    setTimeout(() => {
      if (typeof $WowheadPower !== 'undefined') {
        $WowheadPower.refreshLinks();
      }
    }, 100);
  }
}
