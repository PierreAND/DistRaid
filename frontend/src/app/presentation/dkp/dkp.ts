import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GetDkpTableUseCase } from '../../application/usecases/dkp/getDkpTable.usecase';
import { SetPointsUseCase } from '../../application/usecases/dkp/setPoint.usecase';
import { AttributeLootUseCase } from '../../application/usecases/dkp/AttributeLoot.usecase';
import { RecordAttendanceUseCase } from '../../application/usecases/dkp/recordAttendance.usecase';
import { GetLootHistoryUseCase } from '../../application/usecases/dkp/getLootHistory.usecase';
import { GetAttendanceHistoryUseCase } from '../../application/usecases/dkp/getAttendanceHistory.usecase';
import {
  DkpTable,
  DkpMember,
  LootHistoryEntry,
  AttendanceEntry,
} from '../../domain/models/dkp/dkp.model';

@Component({
  selector: 'app-dkp',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './dkp.html',
  styleUrl: './dkp.scss',
})
export class DkpTableComponent implements OnInit {
  dkpData: DkpTable | null = null;
  lootHistory: LootHistoryEntry[] = [];
  attendanceHistory: AttendanceEntry[] = [];
  raidId!: number;

  activeTab: 'dkp' | 'loot-history' | 'attendance-history' = 'dkp';
  editingPointsFor: number | null = null;
  editPointsValue = 0;
  selectedMembers: Set<number> = new Set();
  hoveredMember: number | null = null;
  loading = false;
  successMessage = '';
  errorMessage = '';
  confirmLoot: { userId: number; lootId: number; lootName: string; userName: string } | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly cdr: ChangeDetectorRef,
    private readonly getDkpTable: GetDkpTableUseCase,
    private readonly setPoints: SetPointsUseCase,
    private readonly attributeLoot: AttributeLootUseCase,
    private readonly recordAttendance: RecordAttendanceUseCase,
    private readonly getLootHistory: GetLootHistoryUseCase,
    private readonly getAttendanceHistory: GetAttendanceHistoryUseCase,
  ) {}

  ngOnInit(): void {
    this.raidId = +this.route.snapshot.paramMap.get('raidId')!;
    this.loadDkpTable();
  }

  loadDkpTable(): void {
    this.loading = true;
    this.getDkpTable.execute(this.raidId).subscribe({
      next: (data) => {
        this.dkpData = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMessage = 'Impossible de charger le tableau DKP';
        this.loading = false;
        this.cdr.detectChanges();
      },
    });
  }

  loadLootHistory(): void {
    this.getLootHistory.execute(this.raidId).subscribe({
      next: (data) => {
        this.lootHistory = data;
        this.cdr.detectChanges();
      },
    });
  }

  getHoveredMember(): DkpMember | null {
    if (this.hoveredMember === null || !this.dkpData) return null;
    return this.dkpData.members.find((m) => m.id === this.hoveredMember) ?? null;
  }

  loadAttendanceHistory(): void {
    this.getAttendanceHistory.execute(this.raidId).subscribe({
      next: (data) => {
        this.attendanceHistory = data;
        this.cdr.detectChanges();
      },
    });
  }

  switchTab(tab: 'dkp' | 'loot-history' | 'attendance-history'): void {
    this.activeTab = tab;
    if (tab === 'loot-history' && this.lootHistory.length === 0) this.loadLootHistory();
    if (tab === 'attendance-history' && this.attendanceHistory.length === 0)
      this.loadAttendanceHistory();
  }

  startEditPoints(member: DkpMember): void {
    this.editingPointsFor = member.id;
    this.editPointsValue = member.points;
  }

  savePoints(member: DkpMember): void {
    this.setPoints
      .execute(this.raidId, { userId: member.id, points: this.editPointsValue })
      .subscribe({
        next: () => {
          member.points = this.editPointsValue;
          this.editingPointsFor = null;
          this.dkpData!.members.sort((a, b) => b.points - a.points);
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Erreur lors de la modification';
          this.cdr.detectChanges();
        },
      });
  }

  cancelEditPoints(): void {
    this.editingPointsFor = null;
  }

  onLootClick(member: DkpMember, loot: any): void {
    this.confirmLoot = {
      userId: member.id,
      lootId: loot.id,
      lootName: loot.name,
      userName: member.name,
    };
  }

  confirmAttributeLoot(): void {
    if (!this.confirmLoot) return;
    const { userId, lootId } = this.confirmLoot;

    this.attributeLoot.execute(this.raidId, { userId, lootId }).subscribe({
      next: (result) => {
        const member = this.dkpData!.members.find((m) => m.id === userId);
        if (member) {
          member.points = result.newPoints;
          member.loots = member.loots.filter((l) => l.id !== lootId);
        }
        this.dkpData!.members.sort((a, b) => b.points - a.points);
        this.successMessage = `${result.loot.name} attribué ! (-${result.pointsCost} pts)`;
        this.confirmLoot = null;
        this.cdr.detectChanges();
        setTimeout(() => {
          this.successMessage = '';
          this.cdr.detectChanges();
        }, 3000);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || "Erreur lors de l'attribution";
        this.confirmLoot = null;
        this.cdr.detectChanges();
      },
    });
  }

  cancelAttributeLoot(): void {
    this.confirmLoot = null;
  }

  toggleMemberSelection(memberId: number): void {
    if (this.selectedMembers.has(memberId)) {
      this.selectedMembers.delete(memberId);
    } else {
      this.selectedMembers.add(memberId);
    }
  }

  selectAllMembers(): void {
    if (!this.dkpData) return;
    if (this.selectedMembers.size === this.dkpData.members.length) {
      this.selectedMembers.clear();
    } else {
      this.dkpData.members.forEach((m) => this.selectedMembers.add(m.id));
    }
  }

  submitAttendance(): void {
    if (this.selectedMembers.size === 0) return;
    const userIds = Array.from(this.selectedMembers);

    this.recordAttendance.execute(this.raidId, { userIds }).subscribe({
      next: (result) => {
        this.dkpData!.members.forEach((m) => {
          if (userIds.includes(m.id)) m.points += result.pointsGiven;
        });
        this.dkpData!.members.sort((a, b) => b.points - a.points);
        this.selectedMembers.clear();
        this.successMessage = `+${result.pointsGiven} pts pour ${userIds.length} joueur(s)`;
        this.cdr.detectChanges();
        setTimeout(() => {
          this.successMessage = '';
          this.cdr.detectChanges();
        }, 3000);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Erreur lors de la participation';
        this.cdr.detectChanges();
      },
    });
  }

  isAllSelected(): boolean {
    return !!this.dkpData && this.selectedMembers.size === this.dkpData.members.length;
  }
}
