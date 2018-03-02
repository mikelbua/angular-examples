import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';
import { Coche } from '../model/coche';


@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.scss']
})
export class ConcesionarioComponent implements OnInit {

  coches : Array<Coche>;
  titulo : string;
  selectedCoche : Coche;

  constructor() {

      this.selectedCoche = new Coche('');

      this.titulo = "Concesionario";

      this.coches = new Array<Coche>();
      this.coches.push( new Coche('Seat') );
      this.coches.push( new Coche('Lamborgini') );
      this.coches.push( new Coche('Renault') );
      this.coches.push( new Coche('Tesla') );
  }

  ngOnInit() {
  }

  showCoche(event):void{
      console.log('evento %o', event );
      console.log('coche %o', event.coche);
      this.selectedCoche = event.coche;
  }

}
