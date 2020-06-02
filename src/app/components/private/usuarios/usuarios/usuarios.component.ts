import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users:User[];
  usersP:User[];
  usersA:User[];
  constructor( private servicio:UserService ) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.servicio.obtenerTodosLosUsuarios().subscribe(
      data =>{
        this.users = data;
      }, 
      error =>{ 
        alert( "Ocurrio un error " );
        console.log( "ERROR", error );
       }
    );
  }


  cargarProfesores(){
    this.servicio.obtenerUsuariosPorTipo("PROFESOR").subscribe(
      data =>{
        this.usersP = data;
        console.log("Respuesta del servidor");
      }, 
      error =>{ 
        alert( "Ocurrio un error " );
        console.log( "ERROR", error );
       }
    );
    
    console.log("Respuesta");
  }


  cargarAlumnos(){
    this.servicio.obtenerUsuariosPorTipo("ALUMNO").subscribe(
      data =>{
        this.usersA = data;
      }, 
      error =>{ 
        alert( "Ocurrio un error " );
        console.log( "ERROR", error );
       }
    );
  }

  editar(){}

  eliminar(){}

}
