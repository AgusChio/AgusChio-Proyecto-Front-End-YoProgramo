import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaEducacionComponent } from './nueva-educacion.component';

describe('NuevaEducacionComponent', () => {
  let component: NuevaEducacionComponent;
  let fixture: ComponentFixture<NuevaEducacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaEducacionComponent]
    });
    fixture = TestBed.createComponent(NuevaEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
