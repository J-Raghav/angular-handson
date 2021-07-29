import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { InfoEmpComponent } from './info-emp/info-emp.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ViewEmpComponent,
    QuantityIncrementComponent,
    EditEmpTemplateDrivenComponent,
    EditEmpReactiveComponent,
    ListEmpComponent,
    InfoEmpComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
