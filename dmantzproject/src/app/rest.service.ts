import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { India } from './data';
import { Observable } from 'rxjs';
import { Student } from './student';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }
  getallUsers(){
    return this.http.get('http://localhost:3000/country')
  }
  deleteById(id : any)
  :Observable<any>{
    const httpOptions = {
      headers:new HttpHeaders({
     'Content-Type' : 'application/json',
     'Accept' : 'application/json',
     'responseType':'text',
     'Access-Control-Allow-Origin':'http://localhost:3000',
     'Access-Control-Allow-Methods':"DELETE,POST,GET,OPTIONS",
     'Access-Control-Allow-Headers':'Content-Type:application/json',
     'Authorization':'my-auth-token'
      })  
    };
    console.log("enter into service")
    return this.http.delete<any>(`http://localhost:3000/country/${id}`,httpOptions).pipe();
  }
  // deleteAll(India : any):Observable<any>{
  //   const httpOptions = {
  //     headers:new HttpHeaders({
  //    'Content-Type' : 'application/json',
  //    'Accept' : 'application/json',
  //    'responseType':'text',
  //    'Access-Control-Allow-Origin':'http://localhost:3000',
  //    'Access-Control-Allow-Methods':"DELETE,POST,GET,OPTIONS",
  //    'Access-Control-Allow-Headers':'Content-Type:application/json',
  //    'Authorization':'my-auth-token'
  //     })  
  //   };
  //   console.log("enter into service")
  //   return this.http.delete<any>("http://localhost:3000/country").pipe();
  // }
  getStudentList(){
    return this.http.get<Student[]>('http://localhost:3000/studentlist')
  }
}
