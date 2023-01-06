import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetComponent } from './get/get.component';
import { QualifiactionComponent } from './qualifiaction/qualifiaction.component';
import { StudentComponent } from './student/student.component';
import { Student2Component } from './student2/student2.component';
import { SubjectsComponent } from './subjects/subjects.component';

const routes: Routes = [
  {path:'get',component:GetComponent},
  {path:'student',component:StudentComponent},
  {path:'student2',component:Student2Component},
  {path:'qualification',component:QualifiactionComponent},
  {path:'subjects',component:SubjectsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
