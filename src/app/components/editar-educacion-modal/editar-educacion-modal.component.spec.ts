import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEducacionModalComponent } from './editar-educacion-modal.component';

describe('EditarEducacionModalComponent', () => {
  let component: EditarEducacionModalComponent;
  let fixture: ComponentFixture<EditarEducacionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEducacionModalComponent]
    });
    fixture = TestBed.createComponent(EditarEducacionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
