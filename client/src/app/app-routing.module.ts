import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './home/index/index.component';
import { RegistrationComponent } from './home/registration/registration.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'register', component: RegistrationComponent },
  {path:'login',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
