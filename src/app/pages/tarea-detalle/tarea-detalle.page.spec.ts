import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TareaDetallePage } from './tarea-detalle.page';

describe('TareaDetallePage', () => {
  let component: TareaDetallePage;
  let fixture: ComponentFixture<TareaDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
