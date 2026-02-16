import { Inject, Injectable } from "@angular/core";
import { Boss } from "../../../domain/models/boss/boss.model";
import { BossRepository } from "../../../domain/repositories/Boss.repository";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class GetAllBossUseCase {
    constructor(private bossRepository: BossRepository) {}
    execute(): Observable<Boss[]> {
        return this.bossRepository.getAll()
    }
}