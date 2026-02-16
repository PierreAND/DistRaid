import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Loot } from "../../../domain/models/boss/boss.model";
import { LootRepository } from "../../../domain/repositories/Loot.repository";

@Injectable({providedIn: "root"})

export class AddOneLootUseCase {
    constructor(private lootRepository: LootRepository) {}
    execute(id: number): Observable<Loot[]> {
        return this.lootRepository.addOneLoot(id)
    }
}