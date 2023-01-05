import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/employee';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-view-employee-details',
  templateUrl: './view-employee-details.component.html',
  styleUrls: ['./view-employee-details.component.css']
})
export class ViewEmployeeDetailsComponent implements OnInit {
employees:Employee=new Employee()
id:any;
  constructor(private route:Router,private router:ActivatedRoute,private employeeservice:EmployeeserviceService) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.employeeservice.getEmployeeByid(this.id).subscribe((data)=>{
      this.employees=data
    })
  }

}
