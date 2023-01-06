import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IndiaService } from '../india.service';
@Component({
  selector: 'app-qualifiaction',
  templateUrl: './qualifiaction.component.html',
  styleUrls: ['./qualifiaction.component.css']
})
export class QualifiactionComponent implements OnInit {
// regform:any
signup:any
// signuser:any
  constructor( private route:Router ,private http:HttpClient ,private signupservice:IndiaService) {
    // regForm: FormGroup
    // this.regform= new FormGroup({})
    // signup:FormGroup
    this.signup=new FormGroup({
      
      'FirstName':new FormControl(),
      'LastName':new FormControl(),
      'email':new FormControl(),
      'password':new FormControl()
    })
   }

  ngOnInit(): void {
  }
// show1(){
//   console.log(this.regform)
// }
// signupform(signup:any){
// console.log(this.signup.value)
// this.signuser=this.signup.value.FirstName;
// this.http.post<any>('  http://localhost:3000/signup',this.signup.value).subscribe(res=>{
//   this.signupservice.success(this.signuser)
//   this.signup.reset();
//   this.route.navigate(['/student2'])
// }
// ,error=>{
//   alert("data added successfully")
// }
// );

// }
submit(){
console.log(this.signup)
this.http.post<any>('http://localhost:3000/signup',this.signup.value).subscribe(data=>{
  alert("submit successfully")
  this.signup.reset();
},error=>{
  alert("something went wrong")
});

}
}
