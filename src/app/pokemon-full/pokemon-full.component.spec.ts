import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFullComponent } from './pokemon-full.component';

describe('PokemonFullComponent', () => {
  let component: PokemonFullComponent;
  let fixture: ComponentFixture<PokemonFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonFullComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
