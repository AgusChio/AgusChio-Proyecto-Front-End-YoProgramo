import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSobreMiModalComponent } from './editar-sobre-mi-modal.component';

describe('EditarSobreMiModalComponent', () => {
  let component: EditarSobreMiModalComponent;
  let fixture: ComponentFixture<EditarSobreMiModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarSobreMiModalComponent]
    });
    fixture = TestBed.createComponent(EditarSobreMiModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
