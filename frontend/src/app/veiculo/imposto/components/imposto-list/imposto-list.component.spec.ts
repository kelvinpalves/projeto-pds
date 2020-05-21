import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpostoListComponent } from './imposto-list.component';

describe('ImpostoListComponent', () => {
  let component: ImpostoListComponent;
  let fixture: ComponentFixture<ImpostoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpostoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpostoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
