import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginPayload, AuthResponse} from "../../../domain/models/users/user.model";
import { UserRepository } from "../../../domain/repositories/User.repository";

@Injectable({providedIn: 'root'})

export class LoginUseCase {
    constructor(private UserRepository: UserRepository) {}
    execute(payload: LoginPayload):Observable<AuthResponse>{
        return this.UserRepository.login(payload)
    }
}