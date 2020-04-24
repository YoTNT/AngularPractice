import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockfinderComponent } from './stockfinder.component';

describe('StockfinderComponent', () => {
  let component: StockfinderComponent;
  let fixture: ComponentFixture<StockfinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockfinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
