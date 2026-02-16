import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserWishlist } from '../../../domain/models/users/user.model';
import { LootRepository } from '../../../domain/repositories/Loot.repository';

@Injectable({ providedIn: 'root' })
export class GetRaidWishlistsUseCase {
  constructor(private lootRepository: LootRepository) {}
  execute(raidId: number): Observable<UserWishlist[]> {
    return this.lootRepository.getRaidLootList(raidId);
  }
}