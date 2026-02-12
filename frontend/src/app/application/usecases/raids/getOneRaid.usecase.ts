import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Raid } from '../../../domain/models/users/user.model';
import { RaidRepository } from '../../../domain/repositories/Raid.repository';

@Injectable({ providedIn: 'root' })
export class GetOneRaidUseCase {
  constructor(private raidRepository: RaidRepository) {}
  execute(id: number): Observable<Raid> {
    return this.raidRepository.getOne(id);
  }
}
