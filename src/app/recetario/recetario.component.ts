import { Component, OnInit } from '@angular/core';
import { Receta } from '../model/receta';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { RecetasService } from '../providers/recetas.service';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {

  recetas : Receta[]; //Array<Receta>
  recetaSelec : Receta;
  glutenFilter : boolean;

  constructor( public recetasService : RecetasService ) { 
    console.log('RecetarioComponent constructor');
    this.glutenFilter = false;
  }

  ngOnInit() {
    console.log('RecetarioComponent ngOnInit');
    this.recetasService.getAll().subscribe(
      result=>{
        console.log('response correcto %o', result);
        if(result.code != 200){
          console.warn(result);
        }else{
            console.log('datos recibidos %o' , result.data);
            
        }
      },
      error=>{
        console.warn(error);
      }
    );

    this.recetaSelec = this.recetas[0] || new Receta('Anonimo');

  }

  seleccionarReceta( receta : Receta ){
    console.log('RecetarioComponent seleccionarReceta');
    this.recetaSelec = receta;
  }

}
