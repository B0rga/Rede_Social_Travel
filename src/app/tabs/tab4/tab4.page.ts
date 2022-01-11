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
  notifications:Array<any> = []
  vizualizadas:Array<any> = []
  constructor(
    private user:UserService
  ) {
  }

  ngOnInit() {
    this.user.getToken().then(async (token)=>{
      this.user.getNotificationsVisualised().then(notifications=>{
       this.vizualizadas = notifications
       console.log(this.vizualizadas)
      })

      const user = await this.user.getUser()
      this.user.getNewNotifications(user, token).subscribe((notifications:any)=>{
        console.log(notifications)
        const {comments, evaluations, followers} = notifications
        if(evaluations){
          this.notifications.push({text: `${evaluations.name} avaliou sua publicação!`, content:`Você recebeu ${evaluations.evaluation.rate} estrelas.`})
        }
        if(followers){
          this.notifications.push({text: `${followers.name} seguiu você!`, content:`siga de volta!`})
        }
        if(comments){
          this.notifications.push({text: `${comments.name} comentou na sua publicação!`, content:comments.content})
        }
        this.user.setNotificationsVisualised(this.notifications)
      })
    })
  }


}
