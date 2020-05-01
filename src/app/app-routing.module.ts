import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';

const routes: Routes = [
  { path: 'calender', component: CalenderComponent },
  { path: '',   redirectTo: '/calender', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: CalenderComponent },
  { path: '**', component: CalenderComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
