import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from'./login/login.component';
import {ProfesorComponent} from './profesor/profesor.component';
import {AlumnoComponent} from './alumno/alumno.component';


const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  {path: 'profesor', component: ProfesorComponent},
  {path: 'alumno/:username', component: AlumnoComponent}

                        ];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
