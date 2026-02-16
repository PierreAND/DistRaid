import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Classe } from '../../domain/models/users/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments';
import { ClasseRepository } from '../../domain/repositories/Classe.repository';

@Injectable({ providedIn: 'root' })
export class ClasseRepositoryImp implements ClasseRepository {
  private readonly classeUrl = `${environment.apiUrl}/classes`;

  constructor(private http: HttpClient) {}
  getAll(): Observable<Classe[]> {
    return this.http.get<Classe[]>(`${this.classeUrl}`);
  }
}
