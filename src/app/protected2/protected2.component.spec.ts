import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Protected2Component } from './protected2.component';

describe('Protected2Component', () => {
  let component: Protected2Component;
  let fixture: ComponentFixture<Protected2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Protected2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Protected2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
