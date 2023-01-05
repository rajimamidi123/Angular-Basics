import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { UpdateEmployeeDetailsComponent } from './update-employee-details/update-employee-details.component';
import { ViewEmployeeDetailsComponent } from './view-employee-details/view-employee-details.component';

const routes: Routes = [
  {path:'employee-details',component:EmployeeDetailsComponent},
  {path:'add-employee',component:AddEmployeeComponent},
  {path:'update-employee-details/:id',component:UpdateEmployeeDetailsComponent},
  {path:'view-employee-details/:id',component:ViewEmployeeDetailsComponent},
  {path:'parent-component',component:ParentComponentComponent},
  {path:'child-component',component:ChildComponentComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
