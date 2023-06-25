import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reportes02paComponent } from './reportes02pa.component';

describe('Reportes02paComponent', () => {
  let component: Reportes02paComponent;
  let fixture: ComponentFixture<Reportes02paComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reportes02paComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reportes02paComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
