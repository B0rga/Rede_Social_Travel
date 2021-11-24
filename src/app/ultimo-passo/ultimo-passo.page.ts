import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-ultimo-passo',
  templateUrl: './ultimo-passo.page.html',
  styleUrls: ['./ultimo-passo.page.scss'],
})
export class UltimoPassoPage implements OnInit {

  countrySelected:string=''
  citySelected:string=''
  interestCountry:string = ''
  interestCity:string = ''
  locality:any = {
    "Brasil": ["São Paulo", "Belo Horizonte", "Rio de Janeiro","Curitiba"],
    "Reino Unido": ["London", "Liverpool", "Manchester"],
    "EUA": ["San Francisco", "Las Vegas", "Los Angeles", "New York", "Orlando"],
    "Japão": ["Tokyo", "Kyoto", "Hiroshima"],
    "Portugal": ["Lisbon", "Coimbra", "Porto"],
    "Italia": ["Rome", "Venice", "Milan", "Florence"],
    "Espanha": ["Barcelona", "Valencia", "Madrid"]
  }
  countrys:Array<string> = ['Brasil', "Reino Unido", "EUA", "Japão", "Portugal", "Italia", "Espanha"]
 

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  selectCountry(country){
    if(this.countrySelected == country){
      this.countrySelected = ''
    }else{
      this.countrySelected = country
    }
    this.citySelected = ''
   
  }
  selectCity(city){
    if(this.citySelected == city){
      this.citySelected = ''
    }else{
      this.citySelected = city
    }
    
  }
  selectInterestCountry(country){
    if(this.interestCountry == country){
      this.interestCountry = ''
    }else{
      this.interestCountry = country
    }
    this.interestCity = ''
   
  }
  selectInterestCity(city){
    if(this.interestCity == city){
      this.interestCity = ''
    }else{
      this.interestCity = city
    }
    
  }

 

}
