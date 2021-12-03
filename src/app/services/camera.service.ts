import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class CameraService extends Camera{
  photos:Array<any>=[]
  takePhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.DestinationType.DATA_URL,
      encodingType: this.EncodingType.JPEG,
      mediaType: this.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: true
     // allowEdit: true
    }
    this.getPicture(options).then((imageData)=>{
      this.photos.push({
        data: 'data:image/jpeg;base64,' + imageData,
        base64: imageData,
        type: 'image/jpeg'
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
      this.photos.push({
        data: 'data:image/jpeg;base64,' + imageData,
        base64: imageData,
        type: 'image/jpeg'
      }) 
    })
    return this.photos
  }
  clearPhotos(){
    this.photos = []
  }
}
