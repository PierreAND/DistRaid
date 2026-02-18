import { User, Classe, Specialisation } from '../users/user.model';
import { Loot } from '../boss/boss.model';


export interface DkpMember extends User {
  points: number;
}

export interface DkpTable {
  raid: { id: number; name: string };
  priorityCosts: Record<number, number>;
  attendancePoints: number;
  members: DkpMember[];
}

export interface LootCandidateInfo {
  userId: number;
  name: string;
  classe: Classe;
  specialisation: Specialisation;
  priority: number;
  points: number;
}

export interface LootWithCandidates {
  id: number;
  name: string;
  url: string;
  candidates: LootCandidateInfo[];
}

export interface LootHistoryEntry {
  id: number;
  userId: number;
  lootId: number;
  priority: number;
  pointsCost: number;
  user: User;
  loot: Loot;
  createdAt: string;
}

export interface AttendanceEntry {
  id: number;
  userId: number;
  pointsGiven: number;
  user: { id: number; name: string };
  createdAt: string;
}

export interface AttributeLootResponse extends LootHistoryEntry {
  previousPoints: number;
  newPoints: number;
}

export interface AttendanceResponse {
  message: string;
  pointsGiven: number;
  userIds: number[];
}

export interface SetPointsPayload {
  userId: number;
  points: number;
}

export interface AttributeLootPayload {
  userId: number;
  lootId: number;
}

export interface RecordAttendancePayload {
  userIds: number[];
}