import { Component, OnInit, Input, Output,EventEmitter  } from '@angular/core';
import { Coche } from '../model/coche';


@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.scss']
})
export class ConcesionarioComponent implements OnInit {

  stock : Array<Coche>;  //Array casteado a Coche
  coche1 : Coche;
  coche2 : Coche;

  constructor() {
    console.log('ConcesionarioComponent constructor');     

    this.coche1 = new Coche('coche1','');
    this.coche2 = new Coche('coche2','');

    this.stock = new Array<Coche>();
    this.stock.push( new Coche('Seat','Panda') );
    this.stock.push( new Coche('Toyota','Verso') );
    this.stock.push( new Coche('Opel','Corsa','v1.6') );
  }

  ngOnInit() {
    console.log('ConcesionarioComponent ngOnInit');     
  }

  recibirCoche(event){
    console.log('ConcesionarioComponent: recibirCoche %o %i', event.coche , event.otroParametro);               
    this.coche2 = this.coche1;
    this.coche1 = event.coche;   
  }

  

}
