import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Classe } from "../../../domain/models/users/user.model";
import { ClasseRepository } from "../../../domain/repositories/Classe.repository";

@Injectable({providedIn:'root'})

export class GetAllClassUseCase {
    constructor(private readonly ClasseRepository: ClasseRepository){}
    execute(): Observable<Classe[]>{
        return this.ClasseRepository.getAll()
    }
}