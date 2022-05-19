import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoModeloComponent } from './novo-modelo.component';

describe('NovoModeloComponent', () => {
  let component: NovoModeloComponent;
  let fixture: ComponentFixture<NovoModeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoModeloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
