import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarColecaoComponent } from './editar-colecao.component';

describe('EditarColecaoComponent', () => {
  let component: EditarColecaoComponent;
  let fixture: ComponentFixture<EditarColecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarColecaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarColecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
