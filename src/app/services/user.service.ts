import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  /**
   * Function para obtener todos los usurios del servidor.
   */
  obtenerTodosLosUsuarios(){
    return this.http.get<User[]>( "http://localhost:3000/usuarios" );
  }


  /**
   * Function para crear un usuario en el servidor
   */
  crearUsuario( user:User ){
    return this.http.post( "http://localhost:3000/usuarios", user );
  }



}
