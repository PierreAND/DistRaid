import { Observable } from "rxjs";
import { Loot } from "../models/boss/boss.model";
import { UserWishlist } from "../models/users/user.model";


export abstract class LootRepository {
    abstract addOneLoot(lootId: number): Observable<Loot[]>
    abstract deleteOneLoot(lootId: number): Observable<void>
    abstract getLootByUser(): Observable<Loot[]>
    abstract getRaidLootList(raidId: number): Observable<UserWishlist[]>
}