import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlistDetailsComponent } from './outlist-details.component';

describe('OutlistDetailsComponent', () => {
  let component: OutlistDetailsComponent;
  let fixture: ComponentFixture<OutlistDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutlistDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
