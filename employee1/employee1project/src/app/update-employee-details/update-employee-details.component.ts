import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/employee';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-update-employee-details',
  templateUrl: './update-employee-details.component.html',
  styleUrls: ['./update-employee-details.component.css']
})
export class UpdateEmployeeDetailsComponent implements OnInit {
employees:Employee=new Employee()
id:any;
  constructor(private employeeservice:EmployeeserviceService,private route:Router,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    this.employeeservice.getEmployeeByid(this.id).subscribe((data)=>{
      this.employees=data;
    })
}
goToEmployeedetails(){
  this.route.navigate(['/employee-details'])
}
saveUpdateEmployee(){
  this.employeeservice.updateEmployee(this.id,this.employees).subscribe((data)=>{
    console.log(data);
  })
}
onSubmit(){
  this.saveUpdateEmployee();
  this.goToEmployeedetails();
}

}
