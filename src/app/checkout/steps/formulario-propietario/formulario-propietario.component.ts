// src/app/checkout/steps/formulario-propietario/formulario-propietario.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../data/data.service';
import { CommonModule } from '@angular/common';
import { filter, Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-formulario-propietario',
  templateUrl: './formulario-propietario.component.html',
  styleUrl: './formulario-propietario.component.css',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  standalone: true,
})
export class FormularioPropietarioComponent {
  propietarioForm: FormGroup;
  formData$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {
    this.formData$ = this.dataService.getFormData().pipe(
      filter((data) => !!data),
      takeUntilDestroyed()
    );
    this.propietarioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      dniNie: ['', Validators.minLength(9)],
    });
  }

  navigateToSecondComponent() {
    if (this.propietarioForm.valid) {
      //const propietarioForm = { isComplete: true };
      this.dataService.setFormData({
        ...this.propietarioForm.value,
        isComplete: true,
      });
      this.router.navigate(['/second-step']);
    } else {
      this.propietarioForm.markAllAsTouched();
      console.log('El formulario no es válido');
    }
  }

  ngOnInit() {
    this.formData$.subscribe((data) => this.propietarioForm.patchValue(data));
  }
}
