declare const $WowheadPower: any;

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Loot } from '../../domain/models/boss/boss.model';
import { GetLootByUserUseCase } from '../../application/usecases/loots/getLootByUser.usecase';
import { DeleteLootUseCase } from '../../application/usecases/loots/deleteLoot.usecase';


@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './profil.html',
  styleUrl: './profil.scss',
})
export class ProfilComponent implements OnInit {
  loots: Loot[] = [];
  errorMessage = '';
  successMessage = '';
  removingLootId: number | null = null;

  constructor(
    private readonly getLootUseCase: GetLootByUserUseCase,
    private readonly removeLootUseCase: DeleteLootUseCase,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadWishlist();
  }

  loadWishlist(): void {
    this.getLootUseCase.execute().subscribe({
      next: (data) => {
        this.loots = data;
        this.cdr.detectChanges();
        this.refreshWowheadTooltips();
      },
      error: (err) => {
        console.error('Erreur chargement wishlist', err);
        this.errorMessage = 'Impossible de charger votre wishlist';
        this.cdr.detectChanges();
      },
    });
  }

  removeLoot(lootId: number): void {
    this.removingLootId = lootId;
    this.clearMessages();

    this.removeLootUseCase.execute(lootId).subscribe({
      next: () => {
        this.successMessage = 'Loot retiré de votre wishlist';
        this.loots = this.loots.filter((l) => l.id !== lootId);
        this.removingLootId = null;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Erreur lors de la suppression';
        this.removingLootId = null;
        this.cdr.detectChanges();
      },
    });
  }

  private clearMessages(): void {
    this.errorMessage = '';
    this.successMessage = '';
  }

  private refreshWowheadTooltips(): void {
    setTimeout(() => {
      if (typeof $WowheadPower !== 'undefined') {
        $WowheadPower.refreshLinks();
      }
    }, 100);
  }
}