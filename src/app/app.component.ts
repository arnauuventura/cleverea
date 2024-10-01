// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormularioPropietarioComponent } from './checkout/steps/formulario-propietario/formulario-propietario.component'; // Importa tu componente
import { Router, RouterModule } from '@angular/router';
import { CardComponent } from "./checkout/steps/second-step/card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormularioPropietarioComponent,
    RouterModule,
    CardComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-app';
  constructor (private router: Router) {}

  goToSecondStep() {
    this.router.navigate(['/second-step']);
  }
}
