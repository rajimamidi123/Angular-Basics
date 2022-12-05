import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dmantzproject'
  data:string='';
  get(event:any){
    this.data=event.target.value;
  }
}
