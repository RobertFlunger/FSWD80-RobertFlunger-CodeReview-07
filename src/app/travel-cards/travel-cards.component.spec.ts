import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelCardsComponent } from './travel-cards.component';

describe('TravelCardsComponent', () => {
  let component: TravelCardsComponent;
  let fixture: ComponentFixture<TravelCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
