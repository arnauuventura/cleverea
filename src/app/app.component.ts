// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule si aún no lo tienes
import { FormularioPropietarioComponent } from './formulario-propietario/formulario-propietario.component'; // Importa tu componente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormularioPropietarioComponent  // Añade el componente aquí
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-app';
}
