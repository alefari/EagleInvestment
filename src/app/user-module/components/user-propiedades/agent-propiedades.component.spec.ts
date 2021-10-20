import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentPropiedadesComponent } from './agent-propiedades.component';

describe('AgentDashboardComponent', () => {
  let component: AgentPropiedadesComponent;
  let fixture: ComponentFixture<AgentPropiedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentPropiedadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
