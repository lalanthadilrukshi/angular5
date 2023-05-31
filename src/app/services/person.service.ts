// to automatically create service -person go to  menu>terminal >new terminal > ng g service services/person


import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' //in app.module.ts add import {HttpClientModule} from '@angular/common/http';/
import {signUp} from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }
  //constructor() { }
  userSignUp(data:any){
  //  userSignUp(data:signUp){
    console.warn("person service called")
    // or console.log("service called")
    //return this.http.post("https://localhost:7097/api/TestFrontEnd/PostPerson",data)// get url from asp.net core backend, buy running it
   // return this.http.post<any>("https://localhost:7097/api/TestFrontEnd/PostPerson",data)// get url from asp.net core backend, buy running it
    return this.http.post("https://localhost:7097/api/TestFrontEnd/PostPerson",data)// get url from asp.net core backend, buy running it
    //return {test:""}
  }
}
