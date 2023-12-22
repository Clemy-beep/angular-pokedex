import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generation5Component } from './generation-5.component';

describe('Generation5Component', () => {
  let component: Generation5Component;
  let fixture: ComponentFixture<Generation5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Generation5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Generation5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
