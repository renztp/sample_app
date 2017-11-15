import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlistComponent } from './outlist.component';

describe('OutlistComponent', () => {
  let component: OutlistComponent;
  let fixture: ComponentFixture<OutlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
