/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PromiseComponent } from './Promise.component';

describe('PromiseComponent', () => {
  let component: PromiseComponent;
  let fixture: ComponentFixture<PromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
