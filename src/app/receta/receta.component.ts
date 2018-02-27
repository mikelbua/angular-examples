import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

  //atributos
  nombre : string;
  imagen : string;
  likes  : number;
  cocinero : string;
  descripcion : string;
  isGlutenFree : boolean;
  ingredientes : string[];

  constructor() { 
    console.log('RecetaComponent constructor');
    this.nombre = 'Bokata Kalamares';
    this.imagen = 'https://www.recetin.com/wp-content/uploads/2012/05/tumblr_ll41lyi9LV1qd17wdo1_500.jpg';
    this.likes = 15;
    this.descripcion = 'Un referente de la cocina madrileña es su bocata de calameres. Como homenaje a los madrileños que celebran el día de su comunidad, vaya aquí esta receta con el toque diferente de la salsa tártara. Igualmente puedes echarles un buen alioli o mayonesa, claro está, pero creo la tártara le va como anillas de calamar al dedo. Feliz día, y buen provecho.';
    this.isGlutenFree = false;
    this.cocinero = 'Karlos Argiñano';
    this.ingredientes = ['Calamares','Limón','Pan','Salsa Ali-oli'];
  }

  ngOnInit() {
    console.log('RecetaComponent ngOnInit');
  }


  sumarLike(){
    console.log('Click sumarLike');
    this.likes++;
  }


}
