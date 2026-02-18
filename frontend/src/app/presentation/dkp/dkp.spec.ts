import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dkp } from './dkp';

describe('Dkp', () => {
  let component: Dkp;
  let fixture: ComponentFixture<Dkp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dkp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dkp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
