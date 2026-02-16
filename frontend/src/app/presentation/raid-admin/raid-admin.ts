import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JoinRequest, Raid, UserWishlist } from '../../domain/models/users/user.model';
import { GetPendingRequestsUseCase } from '../../application/usecases/raids/getPendingRequests.usecase';
import { AcceptRequestUseCase } from '../../application/usecases/raids/acceptRequests.usecase';
import { RejectRequestUseCase } from '../../application/usecases/raids/refuseRequests.usecase';
import { KickUserUseCase } from '../../application/usecases/raids/kickUser.usecase';
import { GetRaidWishlistsUseCase } from '../../application/usecases/loots/getRaidLootList.usecase';

@Component({
  selector: 'app-raid-admin',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './raid-admin.html',
  styleUrl: './raid-admin.scss',
})
export class RaidAdminComponent implements OnInit {
  raidId!: number;
  pendingRequests: JoinRequest[] = [];
  members: UserWishlist[] = [];
  errorMessage = '';
  successMessage = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly getPendingRequestsUseCase: GetPendingRequestsUseCase,
    private readonly acceptRequestUseCase: AcceptRequestUseCase,
    private readonly rejectRequestUseCase: RejectRequestUseCase,
    private readonly kickUserUseCase: KickUserUseCase,
    private readonly getRaidWishlistsUseCase: GetRaidWishlistsUseCase,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.raidId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadPendingRequests();
    this.loadMembers();
  }

  loadPendingRequests(): void {
    this.getPendingRequestsUseCase.execute(this.raidId).subscribe({
      next: (data) => {
        this.pendingRequests = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erreur chargement demandes', err);
        this.cdr.detectChanges();
      },
    });
  }

  loadMembers(): void {
    this.getRaidWishlistsUseCase.execute(this.raidId).subscribe({
      next: (data) => {
        this.members = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erreur chargement membres', err);
        this.errorMessage = 'Impossible de charger les membres';
        this.cdr.detectChanges();
      },
    });
  }

  acceptRequest(requestId: number): void {
    this.clearMessages();
    this.acceptRequestUseCase.execute(requestId).subscribe({
      next: () => {
        this.successMessage = 'Joueur accepté !';
        this.loadPendingRequests();
        this.loadMembers();
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Erreur';
        this.cdr.detectChanges();
      },
    });
  }

  rejectRequest(requestId: number): void {
    this.clearMessages();
    this.rejectRequestUseCase.execute(requestId).subscribe({
      next: () => {
        this.successMessage = 'Demande refusée';
        this.loadPendingRequests();
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Erreur';
        this.cdr.detectChanges();
      },
    });
  }

  kickUser(userId: number): void {
    this.clearMessages();
    this.kickUserUseCase.execute(this.raidId, userId).subscribe({
      next: () => {
        this.successMessage = 'Joueur retiré du raid';
        this.loadMembers();
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Erreur';
        this.cdr.detectChanges();
      },
    });
  }

  private clearMessages(): void {
    this.errorMessage = '';
    this.successMessage = '';
  }
}