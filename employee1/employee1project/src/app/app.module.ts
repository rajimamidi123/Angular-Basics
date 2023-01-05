import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeDetailsComponent } from './update-employee-details/update-employee-details.component';
import { ViewEmployeeDetailsComponent } from './view-employee-details/view-employee-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    UpdateEmployeeDetailsComponent,
    ViewEmployeeDetailsComponent,
    ParentComponentComponent,
    ChildComponentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSlideToggleModule,
    
  

  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
