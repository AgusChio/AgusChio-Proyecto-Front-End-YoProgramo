import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProyectosModalComponent } from './editar-proyectos-modal.component';

describe('EditarProyectosModalComponent', () => {
  let component: EditarProyectosModalComponent;
  let fixture: ComponentFixture<EditarProyectosModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarProyectosModalComponent]
    });
    fixture = TestBed.createComponent(EditarProyectosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
