import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  ID: number = 200
  boolean: string = 'offline'
  allowservers = false
  server: string = ''
  servername = 'test'
  username = ''
  ifcondition = false
  terms=''
  raji=''
  departments:any=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"java"},
    {"id":3,"name":"bootstrap"},
    {"id":4,"name":"python"}
  ]
  constructor( private router:Router ) {
   
    
    setTimeout(() => {
      this.allowservers = true
    }, 5000)
  }

  ngOnInit(): void {
  }
  status() {
    return this.boolean
  }
  servercreated() {
   
     this.server = 'server created' + this.servername
  }
  condition(){
    this.ifcondition = true;
  }
  onselect(department:any){
    this.router.navigate(['/departments',department.id])
  }
}
