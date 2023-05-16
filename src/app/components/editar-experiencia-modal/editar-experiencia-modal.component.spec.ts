import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExperienciaModalComponent } from './editar-experiencia-modal.component';

describe('EditarExperienciaModalComponent', () => {
  let component: EditarExperienciaModalComponent;
  let fixture: ComponentFixture<EditarExperienciaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarExperienciaModalComponent]
    });
    fixture = TestBed.createComponent(EditarExperienciaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
