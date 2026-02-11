import { Observable } from "rxjs";
import { AuthResponse } from "../models/users/user.model";
import { LoginPayload } from "../models/users/user.model";
import { RegisterPayload } from "../models/users/user.model";
import { UpdateUserPayload } from "../models/users/user.model";
import { User } from "../models/users/user.model";

export abstract class UserRepository {
    abstract register(payload: RegisterPayload): Observable<AuthResponse>
    abstract login(payload: LoginPayload): Observable<AuthResponse>
    abstract getById(id: number): Observable<User>
    abstract getAll(): Observable<User[]>
    abstract updateUser(id: number, payload: UpdateUserPayload): Observable<User>
    abstract deleteUser(id:number): Observable<void>
}