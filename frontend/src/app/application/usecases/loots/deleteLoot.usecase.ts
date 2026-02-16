import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LootRepository } from "../../../domain/repositories/Loot.repository";

@Injectable({
    providedIn: 'root'
})

export class DeleteLootUseCase {
    constructor (private lootRepository: LootRepository) {}
    execute(id: number):Observable<void> {
        return this.lootRepository.deleteOneLoot(id)
    }
}