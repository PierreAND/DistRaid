import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RaidRepository } from '../../../domain/repositories/Raid.repository';
import { JoinRequest } from '../../../domain/models/users/user.model';

@Injectable({ providedIn: 'root' })
export class RejectRequestUseCase {
  constructor(private raidRepository: RaidRepository) {}
  execute(requestId: number): Observable<JoinRequest> {
    return this.raidRepository.rejectRequest(requestId);
  }
}