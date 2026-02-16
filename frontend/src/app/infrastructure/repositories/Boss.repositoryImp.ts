import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Boss } from '../../domain/models/boss/boss.model';
import { BossRepository } from '../../domain/repositories/Boss.repository';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments';

@Injectable({ providedIn: 'root' })
export class BossRepositoryImpl implements BossRepository {
  private readonly bossUrl = `${environment.apiUrl}/boss`;
  constructor(private http: HttpClient) {}
  getAll(): Observable<Boss[]> {
    return this.http.get<Boss[]>(`${this.bossUrl}`);
  }
  getOne(id: number): Observable<Boss> {
    return this.http.get<Boss>(`${this.bossUrl}/${id}`);
  }
}
