import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RaidRepository } from '../../../domain/repositories/Raid.repository';
import { User } from '../../../domain/models/users/user.model';

@Injectable({ providedIn: 'root' })
export class AcceptRequestUseCase {
  constructor(private raidRepository: RaidRepository) {}
  execute(requestId: number): Observable<User> {
    return this.raidRepository.acceptRequest(requestId);
  }
}