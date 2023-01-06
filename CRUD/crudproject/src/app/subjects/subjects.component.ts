import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
regform:any
  constructor() { 
    regform:FormGroup
    this.regform= new FormGroup({})
  }

  ngOnInit(): void {
  }
show4(){
  console.log(this.regform)
}
}
