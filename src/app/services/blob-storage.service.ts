import { Injectable } from '@angular/core';
import {BlobServiceClient, ContainerClient} from '@azure/storage-blob'
import { Buffer } from 'buffer';
import * as uuid from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class BlobStorageService {
  accountName:string = 'storageapptravel'
  constructor() { }
  private containerClient( containerName:string,sas?:string,):ContainerClient{
    let token = ''
    if(sas){
      token = sas
    }
    return new BlobServiceClient(`https://${this.accountName}.blob.core.windows.net?${token}`)
    .getContainerClient(containerName)
  }
  showImage(containerName:string, sas?:string){

  }
  upload(files:Array<any>,containerName:string, sas:string, handler: ()=> void){
    let fileNames = []
    files.forEach(file=>{
      //cria uuid unico para cada arquivo
      let name = uuid.v4()
      let date = new Date()
      name = `${date.getFullYear()}-${name}`
      fileNames.push(name)
      //console.log(name)
      //cria o buffer do arquivo
      let buffer = new Buffer(file.base64,'base64')
      //faz o upload do arquivo
      const blockBlobClient = this.containerClient(containerName,sas).getBlockBlobClient(name)
      blockBlobClient.uploadData(buffer, {blobHTTPHeaders: {blobContentType: file.type}})
        .then(()=>handler())
    })
    return fileNames
  }
  delete(){

  }
}
