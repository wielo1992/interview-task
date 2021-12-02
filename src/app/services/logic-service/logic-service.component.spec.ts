import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicServiceComponent } from './logic-service.component';

describe('LogicServiceComponent', () => {
  let component: LogicServiceComponent;
  let fixture: ComponentFixture<LogicServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogicServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
