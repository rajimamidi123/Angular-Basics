import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { FormsModule } from '@angular/forms';
import { TwoComponent } from './two/two.component';
import { RajiService } from './raji.service';
@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RajiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
