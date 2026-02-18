import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DkpRepository } from '../../../domain/repositories/Dkp.repository';
import { RecordAttendancePayload, AttendanceResponse } from '../../../domain/models/dkp/dkp.model';

@Injectable({ providedIn: 'root' })
export class RecordAttendanceUseCase {
  constructor(private dkpRepository: DkpRepository) {}
  execute(raidId: number, payload: RecordAttendancePayload): Observable<AttendanceResponse> {
    return this.dkpRepository.recordAttendance(raidId, payload);
  }
}