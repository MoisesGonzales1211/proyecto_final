import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


export const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' }, 
   { path: 'login', component: LoginComponent }, 
  
];
@NgModule({
   declarations: [LoginComponent],
    imports: [RouterModule.forRoot(routes),FormsModule],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}