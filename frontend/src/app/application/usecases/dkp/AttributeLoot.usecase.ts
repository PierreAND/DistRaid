import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DkpRepository } from '../../../domain/repositories/Dkp.repository';
import { AttributeLootPayload, AttributeLootResponse } from '../../../domain/models/dkp/dkp.model';

@Injectable({ providedIn: 'root' })
export class AttributeLootUseCase {
  constructor(private dkpRepository: DkpRepository) {}
  execute(raidId: number, payload: AttributeLootPayload): Observable<AttributeLootResponse> {
    return this.dkpRepository.attributeLoot(raidId, payload);
  }
}