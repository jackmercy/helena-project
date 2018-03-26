import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppriseComponent } from './supprise.component';

describe('SuppriseComponent', () => {
  let component: SuppriseComponent;
  let fixture: ComponentFixture<SuppriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
