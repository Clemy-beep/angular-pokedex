import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generation8Component } from './generation-8.component';

describe('Generation8Component', () => {
  let component: Generation8Component;
  let fixture: ComponentFixture<Generation8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Generation8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Generation8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
