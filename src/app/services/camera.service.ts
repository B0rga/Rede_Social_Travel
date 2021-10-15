import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class CameraService extends Camera{
  photos:Array<any>=[]
  takingPhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.DestinationType.FILE_URI,
      encodingType: this.EncodingType.JPEG,
      mediaType: this.MediaType.PICTURE,
      allowEdit: true
    }
    this.getPicture(options).then((imageData)=>{
      this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
      }) 
    })
    return this.photos

  }
  getPhotos(){
    const options: CameraOptions = {
      sourceType: this.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.DestinationType.DATA_URL,
      mediaType:0,
      correctOrientation: true
    }
    
    this.getPicture(options).then((imageData)=>{
      this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
      }) 
    })
    return this.photos
  }
}
