import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Covid19Service {
  //declaration
  public countryName = 'south-africa';

  public press: boolean = false;

  //Countries API
  private urlCovid19Countries = 'https://api.covid19api.com/countries';
  //Country Covid Details
  private urlCovid19CountryDetails = `https://api.covid19api.com/country/${this.countryName}?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`;

  constructor(private http: HttpClient) {}

  getCovid19Countries() {
    return this.http.get(this.urlCovid19Countries);
  }

  public getCovid19Data() {
    return this.http.get(this.urlCovid19CountryDetails);
  }

  // Subject
  private sub = new Subject();

  public subObserable$ = this.sub as Observable<string>;

  findCountryDetalis(country: any) {
    this.countryName = country;
    let Date = '';
    this.urlCovid19CountryDetails = '';
    this.urlCovid19CountryDetails = `https://api.covid19api.com/country/${this.countryName}?$from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`;
    this.sub.next(this.http.get(this.urlCovid19CountryDetails));
  }

  public subObjLoader = this.sub as Observable<boolean>;

}
