import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { India } from '../data';
import { RajiService } from '../raji.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
success='textsuccess'
haserror:boolean=true
name1=''
greeting=''
color:any='red'
colors:any=['red','blue','green']
name3:any='rajeshwari'
employees:any=[]
departmentId:any
previousId:any
nextId: number; 
num:number=1;
cityies:any=[]
  constructor(private route:ActivatedRoute,private router:Router,private service:RestService) { }
    //  getting:RajiService
   

  ngOnInit(): void {
    this.getallUsers();
    //this.deleteById(this.cityies);
    // this.employees=this.getting.getemployees();
    // let id=this.route.snapshot.paramMap.get('id');
    // this.departmentId=id
  this.route.paramMap.subscribe((params:ParamMap)=>{
    let id=params.get('id')
    this.departmentId=id;
  })
  }
  getallUsers(){
    this.service.getallUsers().subscribe((response=>{
      this.cityies=response;
      console.log(this.cityies)
    }))
  }

  onclick(){
    console.log("welcome to codevaluation")
  }
  event1(event:any){
    console.log(event)
    this.name1='welcome to code'
  }
  gotoPrevious(){
   let previousId=this.departmentId - 1;
   this.router.navigate(['/departments',previousId]);
  }
  gotoNext(){
    let nextId=+this.departmentId +  +this.num;
    this.router.navigate(['/departments',nextId]);
   }
   deleteById(id : any){
    this.service.deleteById(id).subscribe(result =>{
      console.log(result);
    });
    console.log("after service")
  
   }
  //  deleteAll(India : any){
  //   this.service.deleteAll("http://localhost:3000/india").subscribe(result =>{
  //     console.log(result);
  //   });
  //   console.log("after service")
  
  //  }
}
