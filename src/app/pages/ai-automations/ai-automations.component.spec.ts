import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiAutomationsComponent } from './ai-automations.component';

describe('AiAutomationsComponent', () => {
  let component: AiAutomationsComponent;
  let fixture: ComponentFixture<AiAutomationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiAutomationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiAutomationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
