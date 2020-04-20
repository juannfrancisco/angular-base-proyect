import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-crear',
  templateUrl: './usuarios-crear.component.html',
  styleUrls: ['./usuarios-crear.component.css']
})
export class UsuariosCrearComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  /**
   * 
   */
  crearUsuario(){
    this.router.navigateByUrl( "/privado/usuarios" );
  }

}
