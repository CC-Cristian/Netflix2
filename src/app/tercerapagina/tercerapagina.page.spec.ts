import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TercerapaginaPage } from './tercerapagina.page';

describe('TercerapaginaPage', () => {
  let component: TercerapaginaPage;
  let fixture: ComponentFixture<TercerapaginaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TercerapaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
