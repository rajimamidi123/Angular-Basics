import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/employee';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employees:Employee[]=[]
  id:any
 
  searchText:any;
  constructor(private employeeservice:EmployeeserviceService,private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
   

    this.getEmployeedetails()
    this.id=this.router.snapshot.params['id']
    
    
  }
getEmployeedetails(){
  this.employeeservice.getEmployeedetails().subscribe((data)=>{
    this.employees=data;
  })
}
updateEmployee(id:number){
this.route.navigate(['/update-employee-details',id])
}
deleteEmployee(id:number){
  this.employeeservice.deleteEmployeeByid(id).subscribe((data)=>{
    console.log(data)
  this.getEmployeedetails();
  window.location.reload();
  },message=>{
    alert("Do you want to delete it")
  })
}
viewEmployee(id:number){
this.route.navigate(['/view-employee-details',id])
}
search(event:any){
  let x=event.target.value;
  console.log(x);
  let abc=[... this.employees];
  let matchrecord:any=[];
  for(let index of abc){
    console.log(index);
    if(index.firstName.toLowerCase().indexOf(event.target.value.toLowerCase())>-1){
      matchrecord.push(index)
    }
  }
  this.employees=matchrecord;
}
addEmployee(){
  this.employees.push()
}

}
