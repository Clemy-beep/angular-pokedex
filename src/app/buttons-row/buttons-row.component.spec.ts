import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsRowComponent } from './buttons-row.component';

describe('ButtonsRowComponent', () => {
  let component: ButtonsRowComponent;
  let fixture: ComponentFixture<ButtonsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsRowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
