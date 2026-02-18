import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DkpRepository } from '../../../domain/repositories/Dkp.repository';
import { LootWithCandidates } from '../../../domain/models/dkp/dkp.model';

@Injectable({ providedIn: 'root' })
export class GetLootCandidatesByBossUseCase {
  constructor(private dkpRepository: DkpRepository) {}
  execute(bossId: number): Observable<LootWithCandidates[]> {
    return this.dkpRepository.getLootCandidatesByBoss(bossId);
  }
}