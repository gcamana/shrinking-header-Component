import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrinkingHeaderComponent } from './shrinking-header.component';

describe('ShrinkingHeaderComponent', () => {
  let component: ShrinkingHeaderComponent;
  let fixture: ComponentFixture<ShrinkingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrinkingHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrinkingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
