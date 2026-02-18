import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DkpRepository } from '../../../domain/repositories/Dkp.repository';
import { LootWithCandidates } from '../../../domain/models/dkp/dkp.model';

@Injectable({ providedIn: 'root' })
export class GetLootCandidatesByBossUseCase {
  constructor(private dkpRepository: DkpRepository) {}
  execute(bossId: number): Observable<LootWithCandidates[]> {
    return this.dkpRepository.getUserRaidId().pipe(
      switchMap((raidId) =>
        this.dkpRepository.getLootCandidatesByBoss(bossId, raidId ?? undefined)
      )
    );
  }
}