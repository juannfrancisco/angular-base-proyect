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

  editar(){}

  eliminar(){}

}
