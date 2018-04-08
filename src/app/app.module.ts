import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

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
import { DonationComponent } from './components/donation/donation.component';
import { FooterComponent } from './components/shared/footer/footer.component';

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
    NavbarComponent,
    DonationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: function(http: Http){ return new TranslateStaticLoader(http, '/assets/i18n', '.json') },
      deps: [Http]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
