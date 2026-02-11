import { Inject, Injectable } from "@angular/core";
import { User } from "../../../domain/models/users/user.model";
import { Observable } from "rxjs";
import { UserRepository } from "../../../domain/repositories/User.repository";

@Injectable({providedIn: 'root'})
export class GetAllUsersUsecase {
    constructor(private UserRepository: UserRepository) {}

    execute(): Observable<User[]> {
        return this.UserRepository.getAll()
    }
}