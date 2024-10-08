import { Component, OnInit, Inject, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data/data.service';
import { CardComponent } from './card/card.component';
import { SummaryComponent } from './summary/summary.component';
import { CommonModule } from '@angular/common';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Observable,
  scan,
  share,
  Subject,
  tap,
} from 'rxjs';
import { CoverageChange } from './card/interfaces';
import { CoverageType, CoverageTypeResponse } from '../../data/interface';

@Component({
  selector: 'app-second-step',
  standalone: true,
  imports: [CardComponent, SummaryComponent, CommonModule],
  templateUrl: './second-step.component.html',
  styleUrl: './second-step.component.css',
})
export class SecondStepComponent {
  dataService = inject(DataService);
  formData$: any = this.dataService.getFormData();
  coverageTypes$ = this.dataService
    .getData()
    .pipe(map((response) => response.data.coverage_types));
  totalPrice$: Observable<any> = this.dataService
    .getData()
    .pipe(map((response) => response.data.premium.annual_plan.receipt_amount));

  coverageChangeSubject = new BehaviorSubject<CoverageChange | null>(null);
  coverageTypeList$ = combineLatest([
    //combina coverageTypes$ que es un observable que emite una lista de tipos de cobertura
    this.coverageTypes$, //con coverageChangeSubject que es un BehaviorSubject que emite un cambio en la cobertura
    this.coverageChangeSubject.asObservable(),
  ]).pipe(
    scan((acc: CoverageType[], [coverageTypes, coverageChange]) => {
      const updatedCoverageTypes = acc.map((coverageType) => {
        if (coverageChange === null) {
          return coverageType;
        }
        const selectedCoverages = acc.filter((ct) => ct.selected).length;

        if (coverageType.identifier === coverageChange.identifier) {
          if (coverageChange.selected === false && selectedCoverages === 1) {
            alert('Debes seleccionar al menos una cobertura');
            return {
              ...coverageType,
              selected: true,
            };
          }
          return {
            ...coverageType,
            selected: coverageChange.selected,
          };
        }

        return coverageType;
      });

      const newCoverageTypes = coverageTypes.filter(
        (ct) => !acc.some((accCt) => accCt.identifier === ct.identifier)
      );

      return [...updatedCoverageTypes, ...newCoverageTypes];
    }, []),
    share()
  );

  toggleCoverage(coverage: CoverageChange) {
    this.coverageChangeSubject.next(coverage);
  }
}
