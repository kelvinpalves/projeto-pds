import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoMapComponent } from './veiculo-map.component';

describe('VeiculoMapComponent', () => {
  let component: VeiculoMapComponent;
  let fixture: ComponentFixture<VeiculoMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
