import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTING } from './app.routes';

// Services

import { AppComponent } from './app.component';
import { SterilizationComponent } from './components/sterilization/sterilization.component';
import { BeforeComponent } from './components/before/before.component';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { CatsComponent } from './components/cats/cats.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SterilizationComponent,
    BeforeComponent,
    ConditionsComponent,
    AnimalsComponent,
    CatsComponent,
    ContactComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
