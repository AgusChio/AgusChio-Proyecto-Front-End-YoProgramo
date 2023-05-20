import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaProyectoComponent } from './nueva-proyecto.component';

describe('NuevaProyectoComponent', () => {
  let component: NuevaProyectoComponent;
  let fixture: ComponentFixture<NuevaProyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaProyectoComponent]
    });
    fixture = TestBed.createComponent(NuevaProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
