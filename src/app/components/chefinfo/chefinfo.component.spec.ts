import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefinfoComponent } from './chefinfo.component';

describe('ChefinfoComponent', () => {
  let component: ChefinfoComponent;
  let fixture: ComponentFixture<ChefinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
