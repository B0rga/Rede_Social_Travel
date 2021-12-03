import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthServiceService } from '../services/auth/auth-service.service';

@Component({
  selector: 'app-ultimo-passo',
  templateUrl: './ultimo-passo.page.html',
  styleUrls: ['./ultimo-passo.page.scss'],
})
export class UltimoPassoPage implements OnInit {

  countrySelected:string=''
  citySelected:string=''
  interestCountry:Array<string> = []
  interestCity:Array<string> = []
  locality:any = {
    "Brasil": ["São Paulo", "Belo Horizonte", "Rio de Janeiro","Curitiba"],
    "Reino Unido": ["London", "Liverpool", "Manchester"],
    "EUA": ["San Francisco", "Las Vegas", "Los Angeles", "New York", "Orlando"],
    "Japão": ["Tokyo", "Kyoto", "Hiroshima"],
    "Portugal": ["Lisbon", "Coimbra", "Porto"],
    "Italia": ["Rome", "Venice", "Milan", "Florence"],
    "Espanha": ["Barcelona", "Valencia", "Madrid"]
  }
  countryCode:Array<string> = ['BR', 'UK', "EUA", 'JP', 'PT', 'IT','ES']
  countrys:Array<string> = ['Brasil', "Reino Unido", "EUA", "Japão", "Portugal", "Italia", "Espanha"]
  countryIndex:number

  constructor(
    private router: Router,
    private auth:AuthServiceService
  ) { }

  ngOnInit() {    
  }
  selectCountry(country){
    if(this.countrySelected == country){
      this.countrySelected = ''
      this.countryIndex = -1
    }else{
      this.countrySelected = country
      this.countryIndex = this.countrys.indexOf(country)
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
    let index = this.interestCountry.indexOf(country)
    if(index == -1){
      this.interestCountry.push(country)
    }else{
      this.locality[country].map((city)=>{
        let indexOfCity = this.interestCity.indexOf(city)
        if(indexOfCity != -1){
          this.interestCity.splice(indexOfCity)
        }
      })
      this.interestCountry.splice(index)
    }
    
   
  }
  selectInterestCity(city){
    console.log(this.interestCity)
    let index = this.interestCity.indexOf(city)
    if(index == -1){
      this.interestCity.push(city)
    }else{
      this.interestCountry.splice(index)
    }    
  }
  finish(){
    if(this.countrySelected != '' && this.citySelected != ''){
      this.auth.setUserLocation(this.countrySelected, this.citySelected, this.countryCode[this.countryIndex])
      this.auth.setUserInterest(this.interestCity)
      this.auth.singIn().subscribe((res)=>console.log(res))
    }
  }
 

}
