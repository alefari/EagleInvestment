import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFavoritosComponent } from './no-favoritos.component';

describe('NoFavoritosComponent', () => {
  let component: NoFavoritosComponent;
  let fixture: ComponentFixture<NoFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
