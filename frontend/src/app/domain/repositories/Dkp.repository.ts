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
  HeroicMarkMember,
  HeroicMarksStatus,
} from '../models/dkp/dkp.model';

export abstract class DkpRepository {
  abstract getDkpTable(raidId: number): Observable<DkpTable>;
  abstract setPoints(raidId: number, payload: SetPointsPayload): Observable<any>;
  abstract attributeLoot(
    raidId: number,
    payload: AttributeLootPayload,
  ): Observable<AttributeLootResponse>;
  abstract recordAttendance(
    raidId: number,
    payload: RecordAttendancePayload,
  ): Observable<AttendanceResponse>;
  abstract getLootHistory(raidId: number): Observable<LootHistoryEntry[]>;
  abstract getAttendanceHistory(raidId: number): Observable<AttendanceEntry[]>;
  abstract getLootCandidatesByBoss(
    bossId: number,
    raidId?: number,
  ): Observable<LootWithCandidates[]>;
  abstract getUserRaidId(): Observable<number | null>;
  abstract getMyHeroicMarks(): Observable<HeroicMarksStatus>;
  abstract setHeroicMarksWanted(quantity: number): Observable<any>;
  abstract getHeroicMarksForRaid(raidId: number): Observable<HeroicMarkMember[]>;
  abstract attributeHeroicMark(raidId: number, userId: number): Observable<any>;
}
