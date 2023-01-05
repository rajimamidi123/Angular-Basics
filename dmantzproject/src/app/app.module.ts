import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { FormsModule } from '@angular/forms';
import { TwoComponent } from './two/two.component';
import { RajiService } from './raji.service';
import { FormsComponent } from './forms/forms.component';
import{HttpClientModule} from '@angular/common/http';
import { CrudComponent } from './crud/crud.component';
import { PostComponent } from './post/post.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { AdminHomeComponent } from './admin-home/admin-home.component'
import { AdminAccessGuard } from './admin-access.guard';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiplicationPipe } from './pipes/multiplication.pipe';
@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    FormsComponent,
    CrudComponent,
    PostComponent,
    UpdateComponent,
    ViewComponent,
    AdminHomeComponent,
    ReactiveFormsComponent,
    MultiplicationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,ReactiveFormsModule
    
  ],
  providers: [RajiService ,AdminAccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
