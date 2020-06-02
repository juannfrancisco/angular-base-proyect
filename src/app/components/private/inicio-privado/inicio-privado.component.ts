import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-privado',
  templateUrl: './inicio-privado.component.html',
  styleUrls: ['./inicio-privado.component.css']
})
export class InicioPrivadoComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem( "user" );
    this.router.navigate(['login']);
  }

}
