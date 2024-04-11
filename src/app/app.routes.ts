import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'connexion', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'plan-de-salle',
    loadComponent: () =>
      import('./components/plan-de-salle/plan-de-salle.component').then(
        (f) => f.PlanDeSalleComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'prendre-commande',
    loadComponent: () =>
      import('./components/prise-commande/prise-commande.component').then(
        (f) => f.PriseCommandeComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'accueil',
    loadComponent: () =>
      import('./components/accueil/accueil.component').then(
        (f) => f.AccueilComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'reservations',
    loadComponent: () =>
      import('./components/reservations/reservations.component').then(
        (f) => f.ReservationsComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'messages',
    loadComponent: () =>
      import('./components/messages/messages.component').then(
        (f) => f.MessagesComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'liste-commandes',
    loadComponent: () =>
      import('./components/liste-commandes/liste-commandes.component').then(
        (f) => f.ListeCommandesComponent
      ),
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: '/accueil', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((f) => f.HomeComponent),
    canActivate: [authGuard],
  },
];
