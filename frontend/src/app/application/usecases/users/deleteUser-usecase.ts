import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserRepository } from "../../../domain/repositories/User.repository";

@Injectable({providedIn: 'root'})

export class DeleteUserUseCase {
    constructor(private UserRepository: UserRepository) {}
    execute(id: number):Observable<void> {
        return this.UserRepository.deleteUser(id)
    }
}