import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coche } from '../../model/coche';


@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {

  marca : string;
  @Input('coche') coche : Coche;
  @Output() pasameCoche = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // Cuando se lance el evento click en la plantilla llamaremos a este método
  seleccionar($event){
    this.pasameCoche.emit({coche: this.coche} );
  }

}
