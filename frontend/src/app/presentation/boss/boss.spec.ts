import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boss } from './boss';

describe('Boss', () => {
  let component: Boss;
  let fixture: ComponentFixture<Boss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Boss]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boss);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
