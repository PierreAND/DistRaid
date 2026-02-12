import { Observable } from "rxjs";
import { Raid, CreateRaidPayload} from "../../domain/models/users/user.model";
import { RaidRepository } from "../../domain/repositories/Raid.repository";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments";

@Injectable({ providedIn: "root" })
export class RaidRepositoryImp implements RaidRepository {
  private readonly raidUrl = `${environment.apiUrl}/raids`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Raid[]> {
    return this.http.get<Raid[]>(this.raidUrl);
  }

  getOne(id: number): Observable<Raid> {
    return this.http.get<Raid>(`${this.raidUrl}/${id}`);
  }

  create(payload: CreateRaidPayload): Observable<Raid> {
    return this.http.post<Raid>(this.raidUrl, payload);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.raidUrl}/${id}`);
  }
}