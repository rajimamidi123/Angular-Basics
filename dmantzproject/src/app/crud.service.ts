import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Crud } from './crud';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
 getURL='http://192.168.0.169:9090/employees'
 addURL='http://192.168.0.169:9090/add'
 getByid='http://192.168.0.169:9090/employees'
 updateUrl='http://192.168.0.169:9090/updatekk'
 deleteUrl='http://192.168.0.169:9090/delete'
  constructor(private http:HttpClient) { }
  get():Observable<Crud[]>{
    const httpOptions = {
      headers:new HttpHeaders({
     'Content-Type' : 'application/json',
     'Accept' : 'application/json',
     'responseType':'text',
     'Access-Control-Allow-Origin':'http://192.168.0.169:9090',
     'Access-Control-Allow-Methods':"DELETE,POST,GET,OPTIONS",
     'Access-Control-Allow-Headers':'Content-Type:application/json',
     'Authorization':'my-auth-token'
      })  
    };
  return this.http.get<Crud[]>(`${this.getURL}`,httpOptions)
  }
  // post(students:Crud):Observable<Object>{
  //   return this.http.post(`${this.addURL}`,students)
  //   console.log('enterd ')

  // }
  post(students:Crud):Observable<Crud>{
    return this.http.post<Crud>(`${this.addURL}`,students)
    console.log('enterd ')

  }
  getStudentsByid(id:number):Observable<Crud>{
return this.http.get<Crud>(`${this.getByid}/${id}`)
  }

  updateStudent(id:number,students:Crud):Observable<object>{
  return this.http.put(`${this.updateUrl}/${id}`,students)
  }
  deleteStudent(id:number):Observable<object>{
return this.http.delete(`${this.deleteUrl}/${id}`)
  }
}

