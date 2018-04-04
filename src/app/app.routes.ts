import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './components/animals/animals.component';
import { BeforeComponent } from './components/before/before.component';
import { CatsComponent } from './components/cats/cats.component';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { SterilizationComponent } from './components/sterilization/sterilization.component';
import { DonationComponent } from './components/donation/donation.component';

const APP_ROUTES: Routes = [
  { path: 'animals', component: AnimalsComponent },
  { path: 'before', component: BeforeComponent },
  { path: 'cats', component: CatsComponent },
  { path: 'conditions', component: ConditionsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sterilization', component: SterilizationComponent },
  { path: 'donation', component: DonationComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
