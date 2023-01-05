import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  baseUrl='http://localhost:9090/employees'
  postUrl='http://localhost:9090/add'
  getByid='http://localhost:9090/employees'
  updateUrl='http://localhost:9090/update'
  dltUrl='http://localhost:9090/delete'
  constructor(private http:HttpClient) { }
   getEmployeedetails(){
    return this.http.get<Employee[]>(`${this.baseUrl}`)
 }
  addEmployee(employees:Employee){
    return this.http.post<Employee>(`${this.postUrl}`,employees)
  }

  getEmployeeByid(id:number){
    return this.http.get<Employee>(`${this.getByid}/${id}`)
  }
  updateEmployee(id:number,employees:Employee){
    return this.http.put<Employee>(`${this.updateUrl}/${id}`,employees)
  }
  deleteEmployeeByid(id:number){
    return this.http.delete<Employee>(`${this.dltUrl}/${id}`)
  }

}
