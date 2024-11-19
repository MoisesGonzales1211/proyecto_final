import { Routes } from '@angular/router';
import { app } from '../../server';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirigir raíz al login
  { path: 'login', component: LoginComponent }, // Ruta para el formulario de login
  // Puedes agregar más rutas aquí
  }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}