import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsOpportunityComponent } from './settings-opportunity.component';

describe('SettingsOpportunityComponent', () => {
  let component: SettingsOpportunityComponent;
  let fixture: ComponentFixture<SettingsOpportunityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsOpportunityComponent]
    });
    fixture = TestBed.createComponent(SettingsOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
