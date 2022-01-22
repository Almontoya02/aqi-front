import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationspageComponent } from './stationspage.component';

describe('StationspageComponent', () => {
  let component: StationspageComponent;
  let fixture: ComponentFixture<StationspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
