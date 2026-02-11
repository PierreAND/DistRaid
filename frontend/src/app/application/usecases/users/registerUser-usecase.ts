import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthResponse,RegisterPayload } from "../../../domain/models/users/user.model";
import { UserRepository } from "../../../domain/repositories/User.repository";


@Injectable({providedIn: 'root'}) 

export class RegisterUseCase {
    constructor(private UserRepository: UserRepository){}
    execute(payload: RegisterPayload): Observable<AuthResponse> {
        return this.UserRepository.register(payload)
    }
}