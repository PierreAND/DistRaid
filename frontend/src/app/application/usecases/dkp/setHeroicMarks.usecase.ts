import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DkpRepository } from '../../../domain/repositories/Dkp.repository';

@Injectable({ providedIn: 'root' })
export class SetHeroicMarksUseCase {
  constructor(private dkpRepository: DkpRepository) {}
  execute(quantity: number): Observable<any> {
    return this.dkpRepository.setHeroicMarksWanted(quantity);
  }
}