import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSkillsModalComponent } from './editar-skills-modal.component';

describe('EditarSkillsModalComponent', () => {
  let component: EditarSkillsModalComponent;
  let fixture: ComponentFixture<EditarSkillsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarSkillsModalComponent]
    });
    fixture = TestBed.createComponent(EditarSkillsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
