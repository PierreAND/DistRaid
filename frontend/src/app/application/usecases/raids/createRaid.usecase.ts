import { Observable } from 'rxjs';
import { CreateRaidPayload, Raid } from '../../../domain/models/users/user.model';
import { RaidRepository } from '../../../domain/repositories/Raid.repository';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class createRaidUseCase {
  constructor(private RaidRepository: RaidRepository) {}

  execute(payload: CreateRaidPayload): Observable<Raid> {
    return this.RaidRepository.create(payload);
  }
}
