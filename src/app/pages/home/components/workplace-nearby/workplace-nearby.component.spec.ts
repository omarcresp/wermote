import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplaceNearbyComponent } from './workplace-nearby.component';

describe('WorkplaceNearbyComponent', () => {
  let component: WorkplaceNearbyComponent;
  let fixture: ComponentFixture<WorkplaceNearbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkplaceNearbyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkplaceNearbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
