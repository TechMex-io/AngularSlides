import { Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { ContactComponent } from './contact/contact.component';
import { ExhibitionComponent } from './exhibition/exhibition.component';


export const ROUTES: Routes = [
   { path: '', component: MainPageComponent},
  //  { path: 'home', component: MainPageComponent },
  //  { path: 'exhibition', component: ExhibitionComponent },
  //  { path: 'contact', component: ContactComponent }
]