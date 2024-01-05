import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesComparisionChartComponent } from './sales-comparision-chart.component';

describe('SalesComparisionChartComponent', () => {
  let component: SalesComparisionChartComponent;
  let fixture: ComponentFixture<SalesComparisionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesComparisionChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesComparisionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
