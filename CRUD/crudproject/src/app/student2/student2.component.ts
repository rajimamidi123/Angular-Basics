import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../data';
import { IndiaService } from '../india.service';
@Component({
  selector: 'app-student2',
  templateUrl: './student2.component.html',
  styleUrls: ['./student2.component.css']
})
export class Student2Component implements OnInit {
regform:any
// login:any
  constructor(private india:IndiaService ,private route:Router,private http:HttpClient) {
    regform:FormGroup
    login:FormGroup
    // this.login=new FormGroup({
    //   'uname':new FormControl(),
    //   'password':new FormControl(),

      
    // })
    this.regform= new FormGroup({})
   }

  ngOnInit() {
  // this.put()
  }
//  put(employee:Student){
//   this.india.put(employee).subscribe((data)=>{
//     console.log(data);
//   })
//  }
 show3(){
  console.log(this.regform);
  this.http.post<any>('  http://localhost:3000/qualification',this.regform.value).subscribe((data)=>{
    alert("submit successfully")
    this.regform.reset();

  },error=>{
    alert("something went wrong")
  })
}
// loginform(login:any){
//   console.log(this.login.value)
// }

}
