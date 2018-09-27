import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnidadosComponent } from './anidados.component';

describe('DatosAnidadosComponent', () => {
  let component: AnidadosComponent;
  let fixture: ComponentFixture<AnidadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnidadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
