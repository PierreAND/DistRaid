import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RaidRepository } from '../../../domain/repositories/Raid.repository';
import { User } from '../../../domain/models/users/user.model';

@Injectable({ providedIn: 'root' })
export class KickUserUseCase {
  constructor(private raidRepository: RaidRepository) {}
  execute(raidId: number, userId: number): Observable<User> {
    return this.raidRepository.kickUser(raidId, userId);
  }
}