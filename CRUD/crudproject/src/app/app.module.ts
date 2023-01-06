import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetComponent } from './get/get.component';
import { IndiaService } from './india.service';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Student2Component } from './student2/student2.component';
import { QualifiactionComponent } from './qualifiaction/qualifiaction.component';
import { SubjectsComponent } from './subjects/subjects.component';
@NgModule({
  declarations: [
    AppComponent,
    GetComponent,
    StudentComponent,
    Student2Component,
    QualifiactionComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [IndiaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
