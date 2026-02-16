import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LootRepository } from "../../../domain/repositories/Loot.repository";
import { Loot } from "../../../domain/models/boss/boss.model";


@Injectable({providedIn: 'root'})

export class GetLootByUserUseCase {
    constructor(private lootRepository: LootRepository){}
    execute(): Observable<Loot[]> {
    return this.lootRepository.getLootByUser()
    }
}