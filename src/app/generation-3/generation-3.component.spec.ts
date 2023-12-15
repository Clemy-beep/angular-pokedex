import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generation3Component } from './generation-3.component';

describe('Generation3Component', () => {
  let component: Generation3Component;
  let fixture: ComponentFixture<Generation3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Generation3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Generation3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
