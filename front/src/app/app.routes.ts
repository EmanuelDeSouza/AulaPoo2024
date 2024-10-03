import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TeladeloginComponent } from './teladelogin/teladelogin.component';
import { TelainicialComponent } from './telainicial/telainicial.component';

export const routes: Routes = [
    {path: '', component: TelainicialComponent},
    {path: 'teladelogin', component: TeladeloginComponent},
    
];

