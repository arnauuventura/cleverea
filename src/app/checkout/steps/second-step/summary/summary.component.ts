import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { CoverageType } from '../../../data/interface';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  @Input() formData: any;
  @Input() coverageTypes: CoverageType[] = [];
  @Input() totalPrice: number = 0;
  isSummaryExpanded = true;
  windowWidth: number = window.innerWidth;
  isMobile = false;
  @HostListener('window:resize', ['$event.target'])
  onResize(target: any) {
    this.windowWidth = target.outerWidth;
    this.isMobile = this.windowWidth < 400;

    this.isSummaryExpanded = !this.isMobile;
  }

  ngOnInit() {
    this.onResize(window);
  }

  toggleSummary() {
    if (this.isMobile) {
      this.isSummaryExpanded = !this.isSummaryExpanded;
    }
  }
}
