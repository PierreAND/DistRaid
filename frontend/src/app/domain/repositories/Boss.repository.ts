import { Boss } from "../models/boss/boss.model";
import { Observable } from "rxjs";

export abstract class BossRepository {
    abstract getAll(): Observable<Boss[]>
    abstract getOne(id: number): Observable<Boss>
}