import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardstationComponent } from './cardstation.component';

describe('CardstationComponent', () => {
  let component: CardstationComponent;
  let fixture: ComponentFixture<CardstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardstationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
