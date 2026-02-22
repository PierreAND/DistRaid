import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DkpRepository } from '../../../domain/repositories/Dkp.repository';
import { HeroicMarksStatus } from '../../../domain/models/dkp/dkp.model';

@Injectable({ providedIn: 'root' })
export class GetMyHeroicMarksUseCase {
  constructor(private dkpRepository: DkpRepository) {}
  execute(): Observable<HeroicMarksStatus> {
    return this.dkpRepository.getMyHeroicMarks();
  }
}