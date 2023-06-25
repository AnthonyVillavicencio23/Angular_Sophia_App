import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reportes01paComponent } from './reportes01pa.component';

describe('Reportes01paComponent', () => {
  let component: Reportes01paComponent;
  let fixture: ComponentFixture<Reportes01paComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reportes01paComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reportes01paComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
