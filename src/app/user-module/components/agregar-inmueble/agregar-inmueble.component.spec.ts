import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarInmuebleComponent } from './agregar-inmueble.component';

describe('AgregarInmuebleComponent', () => {
  let component: AgregarInmuebleComponent;
  let fixture: ComponentFixture<AgregarInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarInmuebleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
