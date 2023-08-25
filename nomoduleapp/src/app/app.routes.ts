import { Routes } from '@angular/router';
import { SaludoComponent } from './saludo/saludo.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { logueadoGuard } from './logueado.guard';
import { DebeLoguearseComponent } from './debe-loguearse/debe-loguearse.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {
        path:'saludo',
        component: SaludoComponent,
        canActivate: [logueadoGuard]
    },
    {
        path:'debe-loguearse',
        component: DebeLoguearseComponent
    },
    {
        path:'**',
        component: NavbarComponent
    }
];
