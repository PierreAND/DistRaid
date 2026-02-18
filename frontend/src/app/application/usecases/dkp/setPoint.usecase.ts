import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DkpRepository } from '../../../domain/repositories/Dkp.repository';
import { SetPointsPayload } from '../../../domain/models/dkp/dkp.model';

@Injectable({ providedIn: 'root' })
export class SetPointsUseCase {
  constructor(private dkpRepository: DkpRepository) {}
  execute(raidId: number, payload: SetPointsPayload): Observable<any> {
    return this.dkpRepository.setPoints(raidId, payload);
  }
}