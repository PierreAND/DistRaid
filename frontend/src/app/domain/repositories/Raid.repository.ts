import { Observable } from 'rxjs';
import { Raid, CreateRaidPayload, JoinRequest } from '../models/users/user.model';

export abstract class RaidRepository {
  abstract getAll(): Observable<Raid[]>;
  abstract getOne(id: number): Observable<Raid>;
  abstract create(payload: CreateRaidPayload): Observable<Raid>;
  abstract delete(id: number): Observable<void>;
  abstract requestJoin(raidId: number): Observable<JoinRequest>;
  abstract getPendingRequests(raidId: number): Observable<JoinRequest[]>;
  abstract acceptRequest(requestId: number): Observable<any>;
  abstract rejectRequest(requestId: number): Observable<any>;
  abstract kickUser(raidId: number, userId: number): Observable<any>;
  abstract removeLootFromUser(raidId: number, userId: number, lootId: number): Observable<any>;
}
