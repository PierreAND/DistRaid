import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Raid } from '../../../domain/models/users/user.model';
import { RaidRepository } from '../../../domain/repositories/Raid.repository';

@Injectable({ providedIn: 'root' })
export class GetAllRaidUseCase {
  constructor(private readonly raidRepository: RaidRepository) {}
  execute(): Observable<Raid[]> {
    return this.raidRepository.getAll();
  }
}
