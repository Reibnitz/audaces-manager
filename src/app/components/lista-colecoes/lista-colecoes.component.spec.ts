import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaColecoesComponent } from './lista-colecoes.component';

describe('ListaColecoesComponent', () => {
  let component: ListaColecoesComponent;
  let fixture: ComponentFixture<ListaColecoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaColecoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaColecoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
