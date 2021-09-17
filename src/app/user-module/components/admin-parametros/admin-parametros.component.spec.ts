import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParametrosComponent } from './admin-parametros.component';

describe('AdminParametrosComponent', () => {
  let component: AdminParametrosComponent;
  let fixture: ComponentFixture<AdminParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminParametrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
