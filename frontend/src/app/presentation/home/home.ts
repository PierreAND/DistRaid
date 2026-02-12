import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Raid, User } from '../../domain/models/users/user.model';
import { GetAllRaidUseCase } from '../../application/usecases/raids/getAllRaids.usecase';
import { CreateRaidUseCase } from '../../application/usecases/raids/createRaid.usecase';
import { UdpateUserUseCase } from '../../application/usecases/users/updateUser-usecase';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  raids: Raid[] = [];
  currentUser: User | null = null;
  newRaidName = '';
  showCreateForm = false;
  isCreating = false;
  isJoining: number | null = null;
  errorMessage = '';
  successMessage = '';

  constructor(
    private readonly getAllRaidUseCase: GetAllRaidUseCase,
    private readonly createRaidUseCase: CreateRaidUseCase,
    private readonly updateUserUseCase: UdpateUserUseCase,
    private readonly cdr: ChangeDetectorRef,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.loadCurrentUser();
    this.loadRaids();
  }

  loadCurrentUser(): void {
    const token = localStorage.getItem('access_token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        this.currentUser = { id: payload.sub, email: payload.email } as User;
      } catch {
        this.router.navigate(['/login']);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }

  loadRaids(): void {
    this.getAllRaidUseCase.execute().subscribe({
      next: (data) => {
        this.raids = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erreur chargement raids', err);
        this.errorMessage = 'Impossible de charger les raids';
        this.cdr.detectChanges();
      },
    });
  }

  joinRaid(raidId: number): void {
    if (!this.currentUser) return;

    this.isJoining = raidId;
    this.clearMessages();

    this.updateUserUseCase.execute(this.currentUser.id, { raidId }).subscribe({
      next: () => {
        this.successMessage = 'Vous avez rejoint le raid !';
        this.isJoining = null;
        this.loadRaids();
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Erreur en rejoignant le raid';
        this.isJoining = null;
        this.cdr.detectChanges();
      },
    });
  }

  leaveRaid(): void {
    if (!this.currentUser) return;

    this.clearMessages();

    this.updateUserUseCase.execute(this.currentUser.id, { raidId: null }).subscribe({
      next: () => {
        this.successMessage = 'Vous avez quitté le raid';
        this.loadRaids();
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Erreur en quittant le raid';
        this.cdr.detectChanges();
      },
    });
  }

  toggleCreateForm(): void {
    this.showCreateForm = !this.showCreateForm;
    this.newRaidName = '';
    this.clearMessages();
  }

  createRaid(): void {
    if (!this.newRaidName.trim()) return;

    this.isCreating = true;
    this.clearMessages();

    this.createRaidUseCase.execute({ name: this.newRaidName.trim() }).subscribe({
      next: () => {
        this.successMessage = 'Raid créé avec succès !';
        this.newRaidName = '';
        this.showCreateForm = false;
        this.isCreating = false;
        this.loadRaids();
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Erreur lors de la création';
        this.isCreating = false;
        this.cdr.detectChanges();
      },
    });
  }

  isUserInRaid(raid: Raid): boolean {
    if (!this.currentUser) return false;
    return raid.users?.some((u) => u.id === this.currentUser!.id) ?? false;
  }

  isUserInAnyRaid(): boolean {
    return this.raids.some((r) => this.isUserInRaid(r));
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }

  private clearMessages(): void {
    this.errorMessage = '';
    this.successMessage = '';
  }
}