import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generation2PageComponent } from './generation-2-page.component';

describe('Generation2PageComponent', () => {
  let component: Generation2PageComponent;
  let fixture: ComponentFixture<Generation2PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Generation2PageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Generation2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
