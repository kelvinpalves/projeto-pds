import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpostoFormComponent } from './imposto-form.component';

describe('ImpostoFormComponent', () => {
  let component: ImpostoFormComponent;
  let fixture: ComponentFixture<ImpostoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpostoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpostoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
