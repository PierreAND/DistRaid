import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RaidRepository } from '../../../domain/repositories/Raid.repository';

@Injectable({ providedIn: 'root' })
export class RejectRequestUseCase {
  constructor(private raidRepository: RaidRepository) {}
  execute(requestId: number): Observable<any> {
    return this.raidRepository.rejectRequest(requestId);
  }
}