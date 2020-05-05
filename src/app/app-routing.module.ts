import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login.guard';
const routes: Routes = [
  { path: 'calender', component: CalenderComponent,  canActivate: [LoginGuard],
},
  { path: 'login', component: LoginComponent },

  { path: '',   redirectTo: '/login', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: LoginComponent },

  { path: '**', component: LoginComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
