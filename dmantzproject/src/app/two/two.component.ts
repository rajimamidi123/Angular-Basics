import { Component, OnInit } from '@angular/core';
import { RajiService } from '../raji.service';

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
  constructor(private getting:RajiService) { }

  ngOnInit(): void {
    this.employees=this.getting.getemployees();
  }

  onclick(){
    console.log("welcome to codevaluation")
  }
  event1(event:any){
    console.log(event)
    this.name1='welcome to code'
  }
}
