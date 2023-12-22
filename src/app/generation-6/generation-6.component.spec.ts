import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generation6Component } from './generation-6.component';

describe('Generation6Component', () => {
  let component: Generation6Component;
  let fixture: ComponentFixture<Generation6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Generation6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Generation6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
