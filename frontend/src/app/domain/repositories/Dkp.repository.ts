import { Observable } from 'rxjs';
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
} from '../models/dkp/dkp.model';

export abstract class DkpRepository {
  abstract getDkpTable(raidId: number): Observable<DkpTable>;
  abstract setPoints(raidId: number, payload: SetPointsPayload): Observable<any>;
  abstract attributeLoot(raidId: number, payload: AttributeLootPayload): Observable<AttributeLootResponse>;
  abstract recordAttendance(raidId: number, payload: RecordAttendancePayload): Observable<AttendanceResponse>;
  abstract getLootHistory(raidId: number): Observable<LootHistoryEntry[]>;
  abstract getAttendanceHistory(raidId: number): Observable<AttendanceEntry[]>;
  abstract getLootCandidatesByBoss(bossId: number, raidId?: number): Observable<LootWithCandidates[]>;
  abstract getUserRaidId(): Observable<number | null>;
}