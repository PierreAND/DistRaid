import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DkpRepository } from '../../../domain/repositories/Dkp.repository';
import { AttendanceEntry } from '../../../domain/models/dkp/dkp.model';

@Injectable({ providedIn: 'root' })
export class GetAttendanceHistoryUseCase {
  constructor(private dkpRepository: DkpRepository) {}
  execute(raidId: number): Observable<AttendanceEntry[]> {
    return this.dkpRepository.getAttendanceHistory(raidId);
  }
}