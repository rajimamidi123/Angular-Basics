import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  regForm: any;
  users=[{
    "name":"Rajeshwari",
    "qualifications":[{
      "title":"MCA",
      "year":2022,
      "subjects":[{
        "subname":"computerScience",
        "duration":"3 years"
      }]
    }]
  }]
  constructor() {
    regForm: FormGroup
  
    this.regForm= new FormGroup({
      uname:new FormControl('',[Validators.required,Validators.minLength(4)]),
     Email:new FormControl('',[Validators.required, Validators.email]),
     password:new FormControl('',[Validators.required, Validators.minLength(8)]),
     cpassword:new FormControl('',[Validators.required]),
     gender:new FormControl(),
     address:new FormGroup({
       address1:new FormControl(''),
       address2:new FormControl(''),
       state:new FormControl(''),
     })
   })
  }


  ngOnInit(): void {
  }
show(){
  console.log(this.regForm)
}
}    

