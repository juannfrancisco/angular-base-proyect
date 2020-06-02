import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../../model/User';

@Component({
  selector: 'app-usuarios-editar',
  templateUrl: './usuarios-editar.component.html',
  styleUrls: ['./usuarios-editar.component.css']
})
export class UsuariosEditarComponent implements OnInit {

  idUsuario:number;
  nombreUsuario:string;
  email:string;
  password:string;
  tipo:string;


  constructor( 
    private router: Router,
    private servicio: UserService, 
    private _routeParams: ActivatedRoute ) { }

  ngOnInit(): void {
    this.idUsuario = this._routeParams.snapshot.params['id'];
    this.cargarUsuarioPorId( this.idUsuario );
  }


  cargarUsuarioPorId( id:number ){
    this.servicio.obtenerUsuarioPorId( id ).subscribe( 
      data=>{
        this.idUsuario = data.id;
        this.nombreUsuario = data.username;
        this.email = data.email;
        this.password = data.password;
        this.tipo = data.tipo;
      }, 
      error=>{
        alert("Ocurrio un Error" + error);
      }
    );
  }


  editarUsuario(){

    let user:User  = new User();
    user.id = this.idUsuario;
    user.email = this.email;
    user.username = this.nombreUsuario;
    user.password = this.password;
    user.tipo = this.tipo;

    // Validacion 

    this.servicio.editarUsuario( user ).subscribe( 
      data =>{
        alert( "Usuario editado!" );
        this.router.navigateByUrl( "/privado/usuarios" );
      },
      error =>{
        alert( "Ocurrio un error" );
        console.log("Error", error);
      }
    );

  }



}
