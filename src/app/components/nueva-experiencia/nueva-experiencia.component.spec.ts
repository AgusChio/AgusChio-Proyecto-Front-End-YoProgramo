import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaExperienciaComponent } from './nueva-experiencia.component';

describe('NuevaExperienciaComponent', () => {
  let component: NuevaExperienciaComponent;
  let fixture: ComponentFixture<NuevaExperienciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaExperienciaComponent]
    });
    fixture = TestBed.createComponent(NuevaExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
