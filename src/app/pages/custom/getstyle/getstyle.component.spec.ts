/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetstyleComponent } from './getstyle.component';

describe('GetstyleComponent', () => {
  let component: GetstyleComponent;
  let fixture: ComponentFixture<GetstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
