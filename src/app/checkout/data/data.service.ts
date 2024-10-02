import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { CoverageTypeResponse } from './interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private jsonUrl = '/response.json';
  private formDataSubject: ReplaySubject<any>;

  constructor(private http: HttpClient) {
    const storedFormData = JSON.parse(
      localStorage.getItem('formData') as string
    );
    this.formDataSubject = new ReplaySubject<any>(storedFormData || {});
    if (storedFormData) {
      this.formDataSubject.next(storedFormData);
    }
  }

  getData() {
    return this.http.get<CoverageTypeResponse>(this.jsonUrl);
  }

  setFormData(data: any) {
    this.formDataSubject.next(data);
    localStorage.setItem('formData', JSON.stringify(data));
  }

  getFormData(): Observable<any> {
    return this.formDataSubject.asObservable();
  }

  isFormComplete(): boolean {
    const formData = JSON.parse(localStorage.getItem('formData') as string);
    return formData && formData.isComplete;
  }
}
