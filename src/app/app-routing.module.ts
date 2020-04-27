import { BienvenidoComponent } from './components/private/bienvenido/bienvenido.component';
import { RegistroComponent } from './components/public/registro/registro.component';
import { LoginComponent } from './components/public/login/login.component';
import { InicioComponent } from './components/public/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioPrivadoComponent } from './components/private/inicio-privado/inicio-privado.component';
import { UsuariosComponent } from './components/private/usuarios/usuarios/usuarios.component';
import { UsuariosCrearComponent } from './components/private/usuarios/usuarios-crear/usuarios-crear.component';


const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'inicio',component:InicioComponent},
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  
  {path:'privado',component:InicioPrivadoComponent,
    children:[
      {path:'', component:BienvenidoComponent},
      {path:'inicio', component:BienvenidoComponent},
      {path:'usuarios', component:UsuariosComponent},
      {path:'usuarios/crear', component:UsuariosCrearComponent},
    ]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
