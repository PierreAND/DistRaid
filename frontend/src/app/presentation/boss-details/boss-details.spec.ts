import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossDetails } from './boss-details';

describe('BossDetails', () => {
  let component: BossDetails;
  let fixture: ComponentFixture<BossDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BossDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BossDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
