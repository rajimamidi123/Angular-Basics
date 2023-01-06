import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country';
import { Observable } from 'rxjs';
import { Student } from './data';
@Injectable({
  providedIn: 'root'
})
export class IndiaService {
  // geturl='http://localhost:3000/country'
  putUrl = 'http://localhost:3000/Student'
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:3000/country');
  }
  put(employee: Student):Observable<object> {
    return this.http.put(`${this.putUrl}`,employee);
  }
  // success(signuser:any){

  // }
}
