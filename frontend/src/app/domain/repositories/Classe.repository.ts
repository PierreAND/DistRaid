import { Observable } from "rxjs";
import { Classe } from "../models/users/user.model";

export abstract class ClasseRepository {
    abstract getAll(): Observable<Classe[]>
}

