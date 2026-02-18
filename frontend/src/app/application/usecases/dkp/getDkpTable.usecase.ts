import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DkpRepository } from '../../../domain/repositories/Dkp.repository';
import { DkpTable } from '../../../domain/models/dkp/dkp.model';

@Injectable({ providedIn: 'root' })
export class GetDkpTableUseCase {
  constructor(private dkpRepository: DkpRepository) {}
  execute(raidId: number): Observable<DkpTable> {
    return this.dkpRepository.getDkpTable(raidId);
  }
}