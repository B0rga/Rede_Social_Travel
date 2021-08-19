import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public search:string
  public cacheSearch:Array<string> = []
  constructor(private storage:Storage, private http:HttpClient) { 
    this.getCache()
  }
  public onSearch(search:string){
    this.search = search
    this.cache(search)
  }
  public filterOptions(op:string){
    let regExp = new RegExp(`^${op}`)
    if(op != '' && regExp.test(op)){
      this.cacheSearch = this.cacheSearch.filter(cache=>cache.match(regExp))
    }else{
      this.getCache()
    }
    
  }
  async cache(search){
    await this.storage.create()
    if(await this.storage.get("Search")){
      this.cacheSearch = await this.storage.get("Search")
    }
    this.cacheSearch.push(search)
    await this.storage.set("Search", this.cacheSearch)
  }
  async getCache(){
    await this.storage.create()
    if(await this.storage.get("Search")){
      this.cacheSearch = await this.storage.get("Search")
    }
  }
  async excluir(op){
    await this.storage.create()
    let excluir = await this.storage.get("Search")
    excluir = excluir.filter(option=>option!=op)
    await this.storage.set("Search", excluir)
    this.getCache()
  }
  setSearch(op){
    this.search = op
  }

}
