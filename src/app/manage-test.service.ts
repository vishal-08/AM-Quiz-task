import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ManageTestService {

  url = " http://interviewapi.stgbuild.com/getQuizData"

  constructor(private _http : HttpClient) { }

  getList(){
   
    return this._http.get(this.url)
 
}

currentData(id:any){
  return this._http.get(`${this.url}/${id}`)
}
}
