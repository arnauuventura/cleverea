// src/app/checkout/steps/second-step/cards/cards.component.ts
import { Component, OnInit, Input, Output, EventEmitter,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../data/data.service';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SummaryComponent } from '../summary/summary.component';
import { CoverageChange } from './interfaces';
import { CoverageType } from '../../../data/interface';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, SummaryComponent]
})
export class CardComponent {
  formData: any;
  @Input() coverageType!: CoverageType; // Recibe un array de coberturas
  @Input() totalPrice: number = 0;    // Recibe el precio total (opcional)
  @Output() coverageChange = new EventEmitter<CoverageChange>();


  toggleCoverage(coverage: CoverageType): void {
    this.coverageChange.emit({ identifier: coverage.identifier, selected: !coverage.selected });
  }



  /*selectedCoverage: { title: string, price: number } | null = null;

  selectCoverage(coverage: { title: string, price: number }) {
    this.selectedCoverage = coverage;
  }*/
}

