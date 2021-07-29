import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { EditEmpTemplateDrivenComponent } from './edit-emp-template-driven/edit-emp-template-driven.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { LoginComponent } from './login/login.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { UserComponent } from './user/user.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';

const routes: Routes = [
  { path: 'view-emp', component: ViewEmpComponent },
  { path: 'list-emp', component: ListEmpComponent},
  { path: 'edit-emp-template-driven', component: EditEmpTemplateDrivenComponent },
  { path: 'edit-emp', component: EditEmpReactiveComponent, canActivate: [AuthGuard]},
  { path: 'edit-emp-reactive', component: EditEmpReactiveComponent, canActivate: [AuthGuard]},
  { path: 'edit-emp-reactive/:id', component: EditEmpReactiveComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'quantity-increment', component: QuantityIncrementComponent},
  { path: 'users', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
