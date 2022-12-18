import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../services/covid19.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  public countries: any;
  constructor(private covid19Service: Covid19Service) {}

  ngOnInit(): void {
    this.covid19Service.getCovid19Countries().subscribe(
      (next: any) => {
        this.countries = next;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  getCountryDetails(country: any) {
    this.covid19Service.findCountryDetalis(country.Slug);
  }
}
