import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickNMortyComponent } from './rick-n-morty.component';

describe('RickNMortyComponent', () => {
  let component: RickNMortyComponent;
  let fixture: ComponentFixture<RickNMortyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickNMortyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RickNMortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
