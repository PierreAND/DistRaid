import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidAdmin } from './raid-admin';

describe('RaidAdmin', () => {
  let component: RaidAdmin;
  let fixture: ComponentFixture<RaidAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaidAdmin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaidAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
