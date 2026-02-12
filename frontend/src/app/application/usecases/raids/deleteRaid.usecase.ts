import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Raid } from '../../../domain/models/users/user.model';
import { RaidRepository } from '../../../domain/repositories/Raid.repository';

@Injectable({ providedIn: 'root' })
export class DeleteRaidUseCase {
  constructor(private raidRepository: RaidRepository) {}
  execute(id: number): Observable<void> {
    return this.raidRepository.delete(id);
  }
}
