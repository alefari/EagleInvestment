import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPropiedadesComponent } from './user-propiedades.component';

describe('AgentDashboardComponent', () => {
  let component: UserPropiedadesComponent;
  let fixture: ComponentFixture<UserPropiedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPropiedadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
