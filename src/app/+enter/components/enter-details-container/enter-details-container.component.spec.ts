import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterDetailsContainerComponent } from './enter-details-container.component';

xdescribe('EnterComponent', () => {
  let component: EnterDetailsContainerComponent;
  let fixture: ComponentFixture<EnterDetailsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterDetailsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
