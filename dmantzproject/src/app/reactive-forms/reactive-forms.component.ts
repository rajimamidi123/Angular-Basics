import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  registerform:FormGroup
  

  constructor(private formbuilder:FormBuilder) {
   this.registerform=this.formbuilder.group({
      username:['',Validators.compose([Validators.required,Validators.minLength(5)])],
      password:['',Validators.required],
      cpassword:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      address:this.formbuilder.group({
        city:[''],
        state:[''],
        pincode:['']
      })
    }
    ,{
      validators:this. mustMatch('password','cpassword')
    } 
    )

   }
  
  // registerform= new FormGroup({
  //   username: new FormControl('',Validators.compose([Validators.required,Validators.minLength(10)])),
  //   password:new FormControl('',Validators.required),
  //   confirmpassword:new FormControl('',Validators.required),
  //     address:new FormGroup({
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     pincode:new FormControl('')
    
  //   })
  //     })


  ngOnInit(): void {
  }
 
  
 
  // displayValues(){
  //   this.registerform.patchValue({
  //    username:"Raji",
  //    password:"123",
  //    confirmpassword:"123",
  //    address:{
  //     city:"Nalgonda",
  //     state:"Telangana",
  //     pincode:"508001"
  //    }
  //   })
  // }
  mustMatch(password:any, cpassword:any){
  return (formgroup:FormGroup)=>{
    const passwordcontrol=formgroup.controls[password];
    const cpasswordcontrol=formgroup.controls[cpassword];
     if(passwordcontrol.value!==cpasswordcontrol.value){
      cpasswordcontrol.setErrors({mustMatch:true})
     }
     else{
      cpasswordcontrol.setErrors(null)
     }
   
  }
  }
  get f(){
    return this.registerform.controls;
   }
   get email(){
    return this.registerform.get('email')
   }
  
  submitForm(){
    console.log(this.registerform)
  }

}
