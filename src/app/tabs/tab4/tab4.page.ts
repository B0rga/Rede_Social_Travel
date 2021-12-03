import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {apiAddress} from '../../services/api-address'

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  notifications:Array<object> = []
  constructor(
    private http:HttpClient, private user:UserService
  ) {
  }

  ngOnInit() {
    this.user.getToken().then(async (token)=>{
      const user = await this.user.getUser()
      this.http.get(`${apiAddress}/home/notifications/${user.id}`, {headers:{
        "Authorization": `Bearer ${token}`
      }}).subscribe(res=>{
        console.log(res)
      })
    })
    
  }


}
