import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from '../checkout/data/data.service';

@Injectable({
  providedIn: 'root',
})
export class FormCompletionGuard implements CanActivate {
  constructor(private dataService: DataService, private router: Router) {}

  canActivate(): boolean {
    if (this.dataService.isFormComplete()) {
      return true;
    } else {
      this.router.navigate(['/formulario-propietario']);
      return false;
    }
  }
}
