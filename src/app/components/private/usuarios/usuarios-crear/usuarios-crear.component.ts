import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-crear',
  templateUrl: './usuarios-crear.component.html',
  styleUrls: ['./usuarios-crear.component.css']
})
export class UsuariosCrearComponent implements OnInit {

  // Atributos
  nombre:string;
  nombreUsuario:string;
  email:string;
  password:string;

  errorNombre:boolean;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  /**
   * 
   */
  crearUsuario(){

    if( !this.nombre ||  this.nombre == '' ){
      this.errorNombre = true;
    }else{
      this.errorNombre = false;
    }

    console.log( this.nombre );
    console.log( this.nombreUsuario );
    console.log( this.email );
    console.log( this.password );

    //this.router.navigateByUrl( "/privado/usuarios" );
  }

}
