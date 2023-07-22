import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSalesComponent } from './settings-sales.component';

describe('SettingsSalesComponent', () => {
  let component: SettingsSalesComponent;
  let fixture: ComponentFixture<SettingsSalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsSalesComponent]
    });
    fixture = TestBed.createComponent(SettingsSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
