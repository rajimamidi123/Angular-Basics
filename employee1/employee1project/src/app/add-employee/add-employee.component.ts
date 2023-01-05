import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from 'src/employee';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
employees:Employee=new Employee()

  constructor( private employeeservice:EmployeeserviceService,private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
  }
  saveEmployeeData(){
    this.employeeservice.addEmployee(this.employees).subscribe((data)=>{
      this.employees=data
     this. goToemployeeDetails()

    })
  }
  goToemployeeDetails(){
    this.route.navigate(['/employee-details'])
  }
  onSubmit(){
   this. saveEmployeeData()
  this. goToemployeeDetails()
 
  }

}
