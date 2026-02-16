import { Injectable } from "@angular/core";
import { Boss } from "../../../domain/models/boss/boss.model";
import { Observable } from "rxjs";
import { BossRepository } from "../../../domain/repositories/Boss.repository";

@Injectable({providedIn: 'root'})
export class GetOneBossUseCase {
    constructor( private bossRepository : BossRepository) {}
    execute(id: number): Observable<Boss> {
        return this.bossRepository.getOne(id)
    }
}