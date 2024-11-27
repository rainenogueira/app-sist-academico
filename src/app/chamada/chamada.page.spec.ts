import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChamadaPage } from './chamada.page';

describe('ChamadaPage', () => {
  let component: ChamadaPage;
  let fixture: ComponentFixture<ChamadaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
