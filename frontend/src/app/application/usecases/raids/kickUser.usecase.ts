import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RaidRepository } from '../../../domain/repositories/Raid.repository';

@Injectable({ providedIn: 'root' })
export class KickUserUseCase {
  constructor(private raidRepository: RaidRepository) {}
  execute(raidId: number, userId: number): Observable<any> {
    return this.raidRepository.kickUser(raidId, userId);
  }
}