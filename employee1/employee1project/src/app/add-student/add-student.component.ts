import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  studentList:FormGroup
  employeelist:FormGroup
  constructor(private http:HttpClient) {
  this.studentList=new FormGroup({
    'FirstName':new FormControl(),
    'LastName':new FormControl(),
    'rollnumber':new FormControl()
  }),
  this.employeelist=new FormGroup({
    'Employeename':new FormControl(),
    'EmployeeId':new FormControl(),
    'email':new FormControl(),
  })
   }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.studentList)
    this.http.post<any>('http://localhost:3000/studentList',this.studentList.value).subscribe(data=>{
      alert("submit successfully")
       },error=>{
      alert("something went wrong")
    });
    this.http.post<any>('http://localhost:3000/employeelist',this.employeelist.value).subscribe(data=>{
      alert("submit successfully")
       },error=>{
      alert("something went wrong")
    });
    
    }

}
