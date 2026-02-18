import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { DkpRepository } from '../../domain/repositories/Dkp.repository';
import {
  DkpTable,
  SetPointsPayload,
  AttributeLootPayload,
  AttributeLootResponse,
  RecordAttendancePayload,
  AttendanceResponse,
  LootHistoryEntry,
  AttendanceEntry,
  LootWithCandidates,
} from '../../domain/models/dkp/dkp.model';
import { environment } from '../../../environments';

@Injectable({ providedIn: 'root' })
export class DkpRepositoryImpl extends DkpRepository {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    super();
  }

  getDkpTable(raidId: number): Observable<DkpTable> {
    return this.http.get<DkpTable>(`${this.apiUrl}/raids/${raidId}/dkp`);
  }

  setPoints(raidId: number, payload: SetPointsPayload): Observable<any> {
    return this.http.post(`${this.apiUrl}/raids/${raidId}/dkp/points`, payload);
  }

  attributeLoot(raidId: number, payload: AttributeLootPayload): Observable<AttributeLootResponse> {
    return this.http.post<AttributeLootResponse>(
      `${this.apiUrl}/raids/${raidId}/dkp/attribute-loot`,
      payload,
    );
  }

  recordAttendance(
    raidId: number,
    payload: RecordAttendancePayload,
  ): Observable<AttendanceResponse> {
    return this.http.post<AttendanceResponse>(
      `${this.apiUrl}/raids/${raidId}/dkp/attendance`,
      payload,
    );
  }

  getLootHistory(raidId: number): Observable<LootHistoryEntry[]> {
    return this.http.get<LootHistoryEntry[]>(`${this.apiUrl}/raids/${raidId}/dkp/loot-history`);
  }

  getAttendanceHistory(raidId: number): Observable<AttendanceEntry[]> {
    return this.http.get<AttendanceEntry[]>(
      `${this.apiUrl}/raids/${raidId}/dkp/attendance-history`,
    );
  }

  getLootCandidatesByBoss(bossId: number, raidId?: number): Observable<LootWithCandidates[]> {
    const params = raidId ? `?raidId=${raidId}` : '';
    return this.http.get<LootWithCandidates[]>(
      `${this.apiUrl}/boss/${bossId}/loot-candidates${params}`,
    );
  }
  getUserRaidId(): Observable<number | null> {
    return this.http
      .get<any>(`${this.apiUrl}/auth/profile`)
      .pipe(map((user: { raidId: any; }) => user.raidId ?? null));
  }
}
