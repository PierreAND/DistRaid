import { Observable } from "rxjs";
import { Loot } from "../models/boss/boss.model";


export abstract class LootRepository {
    abstract addOneLoot(lootId: number): Observable<Loot[]>
    abstract deleteOneLoot(lootId: number): Observable<void>
    abstract getLootByUser(): Observable<Loot[]>
}