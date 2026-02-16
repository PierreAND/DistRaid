import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JoinRequest } from '../../../domain/models/users/user.model';
import { RaidRepository } from '../../../domain/repositories/Raid.repository';

@Injectable({ providedIn: 'root' })
export class GetPendingRequestsUseCase {
  constructor(private raidRepository: RaidRepository) {}
  execute(raidId: number): Observable<JoinRequest[]> {
    return this.raidRepository.getPendingRequests(raidId);
  }
}