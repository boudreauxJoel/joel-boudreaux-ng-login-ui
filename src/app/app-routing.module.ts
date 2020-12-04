import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserLoggedInComponent } from './user-logged-in/user-logged-in.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'success', component: UserLoggedInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
