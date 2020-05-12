import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-usuarios-crear',
  templateUrl: './usuarios-crear.component.html',
  styleUrls: ['./usuarios-crear.component.css']
})
export class UsuariosCrearComponent implements OnInit {

  // Atributos
  nombreUsuario:string;
  email:string;
  password:string;

  errorNombre:boolean;

  constructor(
    private router: Router,
    private services:UserService
  ) { }

  ngOnInit(): void {
  }

  /**
   * 
   */
  crearUsuario(){

    console.log( this.nombreUsuario );
    console.log( this.email );
    console.log( this.password );

    let user:User = new User();
    user.email = this.email;
    user.username = this.nombreUsuario;
    user.password = this.password;
    user.admin = false;

    this.services.crearUsuario( user ).subscribe( 
      data =>{
        alert( "Usuario agregado!" );
        this.router.navigateByUrl( "/privado/usuarios" );
      },
      error =>{
        alert( "Ocurrio un error" );
        console.log("Error", error);
      }
    );

    //this.router.navigateByUrl( "/privado/usuarios" );
  }

}
