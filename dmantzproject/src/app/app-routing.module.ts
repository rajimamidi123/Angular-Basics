import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CrudComponent } from './crud/crud.component';
import { FormsComponent } from './forms/forms.component';
import { OneComponent } from './one/one.component';
import { PostComponent } from './post/post.component';
import { TwoComponent } from './two/two.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { AdminAccessGuard } from './admin-access.guard';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
const routes: Routes = [
  {path:'reactive-forms',component:ReactiveFormsComponent},
  {path:'one',component:OneComponent},
  {path:'two',component:TwoComponent},
  {path:'departments',component:OneComponent},
  {path:'departments/:id',component:TwoComponent},
  {path:'forms',component:FormsComponent},
  {path:'crud',component:CrudComponent},
  {path:'post',component:PostComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'view/:id',component:ViewComponent},
  {path:'admin',component:AdminHomeComponent,canActivate:[AdminAccessGuard]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
