import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantSectionComponent } from './plant-section.component';

describe('PlantSectionComponent', () => {
  let component: PlantSectionComponent;
  let fixture: ComponentFixture<PlantSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
