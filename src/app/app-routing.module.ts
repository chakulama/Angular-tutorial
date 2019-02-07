import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from'./login/login.component';
import {ProfesorComponent} from './profesor/profesor.component';
import {AlumnoComponent} from './alumno/alumno.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
{path:'',redirectTo:'/login',pathMatch:'full'},
{path: 'profesor', component: ProfesorComponent},
{path: 'alumno', component: AlumnoComponent}

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
