import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserRepository } from "../../../domain/repositories/User.repository";
import { User } from "../../../domain/models/users/user.model";

@Injectable({providedIn: 'root'})
export class getOneUserUseCase {
    constructor(private UserRepository: UserRepository){}

    execute(id: number): Observable<User> {
        return this.UserRepository.getById(id)
    } 
} 