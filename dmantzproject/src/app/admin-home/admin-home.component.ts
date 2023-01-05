import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Student } from '../student';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  public student:Student[]=[];
  constructor (private restservice:RestService){}
// student=[{
//   "id":1,
//   "studentname":"Rajeshwari",
//   "year":[{
//     "id":2,
//     "year2019":[{
//       "subject":"computerscience",
//       "marks":85
//     }],
//     "year2020":[{
//       "subject":"java",
//       "marks":85
//     }],
//     "year2021":[{
//       "subject":"python",
//       "marks":87,
//     }]
//   }]
// }]
//   constructor() { }

  ngOnInit(): void {
    this.getStudentList();
  }
  getStudentList(){
 this.restservice.getStudentList().subscribe((results)=>{
  console.log(results);
  this.student=results;  
 })
  }

}
