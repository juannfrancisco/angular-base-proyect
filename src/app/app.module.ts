import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './components/public/inicio/inicio.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegistroComponent } from './components/public/registro/registro.component';
import { HeaderPublicComponent } from './components/public/commons/header-public/header-public.component';
import { FooterPublicComponent } from './components/public/commons/footer-public/footer-public.component';
import { InicioPrivadoComponent } from './components/private/inicio-privado/inicio-privado.component';
import { BienvenidoComponent } from './components/private/bienvenido/bienvenido.component';
import { UsuariosComponent } from './components/private/usuarios/usuarios/usuarios.component';
import { UsuariosCrearComponent } from './components/private/usuarios/usuarios-crear/usuarios-crear.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    HeaderPublicComponent,
    FooterPublicComponent,
    InicioPrivadoComponent,
    BienvenidoComponent,
    UsuariosComponent,
    UsuariosCrearComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
