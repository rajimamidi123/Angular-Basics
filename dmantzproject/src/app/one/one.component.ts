import { Component, OnInit } from '@angular/core';

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
  constructor() {
   
    
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
}
