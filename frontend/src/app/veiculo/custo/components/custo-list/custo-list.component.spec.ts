import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustoListComponent } from './custo-list.component';

describe('CustoListComponent', () => {
  let component: CustoListComponent;
  let fixture: ComponentFixture<CustoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
