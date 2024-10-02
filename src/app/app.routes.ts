// src/app/app.routes.ts
import { RouterModule, Routes } from '@angular/router';
import { FormularioPropietarioComponent } from './checkout/steps/formulario-propietario/formulario-propietario.component';
import { SecondStepComponent } from './checkout/steps/second-step/second-step.component';
import { FormCompletionGuard } from './guard/form-done.guard';

export const routes: Routes = [
  { path: 'formulario-propietario', component: FormularioPropietarioComponent },
  {
    path: 'second-step',
    component: SecondStepComponent,
    canActivate: [FormCompletionGuard],
  },
  { path: '', redirectTo: '/formulario-propietario', pathMatch: 'full' },
];
