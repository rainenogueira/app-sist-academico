import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaltasPage } from './faltas.page';

describe('FaltasPage', () => {
  let component: FaltasPage;
  let fixture: ComponentFixture<FaltasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FaltasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
