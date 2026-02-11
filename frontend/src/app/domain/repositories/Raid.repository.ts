import { Observable } from "rxjs";
import { Raid, CreateRaidPayload} from "../models/users/user.model";

export abstract class RaidRepository {
    abstract getAll(): Observable<Raid[]>
    abstract getOne(id: number): Observable<Raid>
    abstract create(payload: CreateRaidPayload): Observable<Raid>
    abstract delete(id: number): Observable<void>
}