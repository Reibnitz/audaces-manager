import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaColecaoComponent } from './nova-colecao.component';

describe('NovaColecaoComponent', () => {
  let component: NovaColecaoComponent;
  let fixture: ComponentFixture<NovaColecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaColecaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaColecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
