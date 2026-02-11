import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserRepository } from "../../../domain/repositories/User.repository";
import { User } from "../../../domain/models/users/user.model";
import { UpdateUserPayload } from "../../../domain/models/users/user.model";

@Injectable({providedIn: 'root'})
export class UdpateUserUseCase {
    constructor(private UserRepository: UserRepository){}

    execute(id: number, payload:  UpdateUserPayload ): Observable<User>{
        return this.UserRepository.updateUser(id, payload)
    }
}