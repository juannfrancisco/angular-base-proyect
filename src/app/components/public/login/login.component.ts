import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userName:string;
  password:string;

  constructor(
    private router: Router,
    private servicio:UserService
  ) { }

  ngOnInit(): void {
  }

  /**
   * 
   */
  iniciarSesion(){

    this.servicio.login( this.userName, this.password ).subscribe(
      data => {
        if( data.length != 0 ){
          localStorage.setItem( "user", JSON.stringify(data[0]) );
          this.router.navigateByUrl( "/privado/inicio" );
        }else{
          alert( "error" );
        }
      }, 
      error => {
        alert( "Ocurrio un error" );
      }
  
    );

    //
  }

}
