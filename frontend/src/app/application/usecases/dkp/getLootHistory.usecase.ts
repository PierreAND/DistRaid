import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DkpRepository } from '../../../domain/repositories/Dkp.repository';
import { LootHistoryEntry } from '../../../domain/models/dkp/dkp.model';

@Injectable({ providedIn: 'root' })
export class GetLootHistoryUseCase {
  constructor(private dkpRepository: DkpRepository) {}
  execute(raidId: number): Observable<LootHistoryEntry[]> {
    return this.dkpRepository.getLootHistory(raidId);
  }
}