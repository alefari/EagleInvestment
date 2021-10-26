import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAgenteComponent } from './perfil-agente.component';

describe('PerfilAgenteComponent', () => {
  let component: PerfilAgenteComponent;
  let fixture: ComponentFixture<PerfilAgenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAgenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAgenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
