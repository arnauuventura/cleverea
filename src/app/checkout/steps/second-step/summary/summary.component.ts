import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CoverageType } from '../../../data/interface';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  @Input() formData: any;
  @Input() coverageTypes: CoverageType[] = [];
  @Input() totalPrice: number = 0;
  //@Input() selectedCoverage: { title: string, price: number } | null = null;

}
