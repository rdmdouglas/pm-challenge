import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SettingsSalesComponent } from './settings-sales/settings-sales.component';
import { SettingsOpportunityComponent } from './settings-opportunity/settings-opportunity.component';
import { CardsComponent } from './settings-sales/cards/cards.component';
import { RadioGroupComponent } from './settings-sales/radio-group/radio-group.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SettingsSalesComponent,
    SettingsOpportunityComponent,
    CardsComponent,
    RadioGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
