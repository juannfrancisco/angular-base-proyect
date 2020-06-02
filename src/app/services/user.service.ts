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

  obtenerUsuarioPorId(  id:number ){
    return this.http.get<User>( "http://localhost:3000/usuarios/"+id );
  }


   /**
   * Function para obtener todos los usurios del servidor.
   */
  obtenerTodosLosProfesores(){
    return this.http.get<User[]>( "http://localhost:3000/usuarios?tipo=PROFESOR" );
  }
  
   /**
   * Function para obtener todos los usurios del servidor.
   */
  obtenerUsuariosPorTipo( tipo:string ){
    return this.http.get<User[]>( "http://localhost:3000/usuarios?tipo=" + tipo );
  }

  /**
   * Function para crear un usuario en el servidor
   */
  crearUsuario( user:User ){
    return this.http.post( "http://localhost:3000/usuarios", user );
  }


  /**
   * Function para crear un usuario en el servidor
   */
  editarUsuario( user:User ){
    return this.http.put( "http://localhost:3000/usuarios/"+user.id, user );
  }


  // eliminar 

  // actualizar

}
