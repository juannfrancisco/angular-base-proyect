import { User } from './../../../model/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  user:User;

  constructor() { }

  ngOnInit(): void {

    this.user = JSON.parse( localStorage.getItem( "user" ) );
    console.log( this.user );

  }

}
