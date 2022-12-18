import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../services/covid19.service';

@Component({
  selector: 'app-contentsection',
  templateUrl: './contentsection.component.html',
  styleUrls: ['./contentsection.component.css'],
})
export class ContentsectionComponent implements OnInit {
  public covid19Datas: any;
  public filteredCovid19Datas: any;
  public displayLoaderIndicator: boolean = true;
  public fetchCountry: any;
  public loaderObservable: any;
  public message:any
  constructor(private covid19Service: Covid19Service) {}

  ngOnInit(): void {
    this.getSouthAfricaCountryDetails();
    
    this.getCountryDetails();
  }

  //fetching South Africa Country Details
  public getSouthAfricaCountryDetails() {
    this.covid19Service.getCovid19Data().subscribe(
      (next: any) => {
        this.covid19Datas = next;
        this.filteredCovid19Datas = this.covid19Datas.slice(
          this.covid19Datas.length - 10
        );
        this.displayLoaderIndicator = false;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  public getLoaderDetails() {
    this.covid19Service.subObjLoader.subscribe(
      (next: any) => {
        this.loaderObservable = next;
        this.loaderObservable.subscribe(
          (next: any) => {
            

            this.displayLoaderIndicator = true;
          
          },
          (error: any) => {
            console.log(error);
          }
        );
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  //fetching Country Details based on country condition
  public getCountryDetails() {
    this.getLoaderDetails();
    this.covid19Service.subObserable$.subscribe(
      (next: any) => {
        this.fetchCountry = next;
        this.fetchCountry.subscribe(
          (country: any) => {
            this.covid19Datas = country;
            this.filteredCovid19Datas = this.covid19Datas.slice(
              this.covid19Datas.length - 10
            );
            
            
            
            this.displayLoaderIndicator = false;
          },
          (error: any) => {
            console.log(error);
          }
        );
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
