// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { FormularioPropietarioComponent } from './checkout/steps/formulario-propietario/formulario-propietario.component';
import { SecondStepComponent } from './checkout/steps/second-step/second-step.component';
import { CardComponent } from './checkout/steps/second-step/card/card.component';

export const routes: Routes = [
  { path: 'formulario-propietario', component: FormularioPropietarioComponent },
  { path: 'second-step', component: SecondStepComponent },
  { path: '', redirectTo: '/formulario-propietario', pathMatch: 'full' }
];