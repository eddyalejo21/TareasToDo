import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TareaNuevaPage } from './tarea-nueva.page';

describe('TareaNuevaPage', () => {
  let component: TareaNuevaPage;
  let fixture: ComponentFixture<TareaNuevaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaNuevaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
