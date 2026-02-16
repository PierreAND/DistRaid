import { environment } from '../../../environments';
import { HttpClient } from '@angular/common/http';
import { Loot } from '../../domain/models/boss/boss.model';
import { LootRepository } from '../../domain/repositories/Loot.repository';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LootRepositoryImpl implements LootRepository {
  private readonly lootUrl = `${environment.apiUrl}/loots`;
  constructor(private http: HttpClient) {}
  getLootByUser(): Observable<Loot[]> {
    return this.http.get<Loot[]>(`${this.lootUrl}`);
  }
  addOneLoot(lootId: number): Observable<Loot[]> {
    return this.http.post<Loot[]>(this.lootUrl, { lootId });
  }
  deleteOneLoot(lootId: number): Observable<void> {
      return this.http.delete<void>(`${this.lootUrl}/${lootId}`)
  }
}
