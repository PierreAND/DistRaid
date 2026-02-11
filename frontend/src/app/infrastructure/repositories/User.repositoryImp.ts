import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User, AuthResponse, LoginPayload, RegisterPayload, UpdateUserPayload } from "../../domain/models/users/user.model";
import { UserRepository } from "../../domain/repositories/User.repository";
import { environment } from "../../../environments";



@Injectable({providedIn: 'root'})

export class UserRepositoryImpl implements UserRepository {
    private readonly  apiUrl = `${environment.apiUrl}/auth`;
    private readonly  userUrl = `${environment.apiUrl}/users`;
    constructor(private http: HttpClient) {

    }
    register(payload: RegisterPayload): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(`${this.apiUrl}/register`, payload)
    }
    login(payload: LoginPayload): Observable<AuthResponse>{
        return this.http.post<AuthResponse>(`${this.apiUrl}/login`, payload)
    }

    getById(id: number): Observable<User>{
        return this.http.get<User>(`${this.userUrl}/${id}`)
    }

    getAll(): Observable<User[]> {
        return this.http.get<User[]>(`${this.userUrl}`)
    }
    updateUser(id: number, payload: UpdateUserPayload): Observable<User> {
        return this.http.patch<User>(`${this.userUrl}/${id}`, payload)
    }
    deleteUser(id: number): Observable<void> {
        return this.http.delete<void>(`${this.userUrl}/${id}`)
    }
} 