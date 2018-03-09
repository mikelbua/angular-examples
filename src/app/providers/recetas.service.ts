import { Injectable } from '@angular/core';
import { Receta } from '../model/receta';
import { MOCK_RECETA } from './mock.recetas';
// Importar objetos de la librería http
import {HttpClient, HttpHeaders} from '@angular/common/http';
// Importar la clase Observable desde la librería rxjs
import { Observable } from 'rxjs/Observable';


const API = "http://localhost:3000"; 

@Injectable()
export class RecetasService {


  constructor( private http: HttpClient ) { 
    console.log('RecetasService constructor');
  }


  getAll(): Observable<any>{
    console.log(`RecetasService getAll ${API}receta`);    
    return this.http.get(`${API}/receta`);
    
    /*
    let jsonData = JSON.parse(MOCK_RECETA);
    this.recetas = [];
    let receta;

    jsonData.forEach( el => {
       receta = new Receta( el.nombre, el.cocinero);
       receta.id = el.id;
       receta.ingredientes = el.ingredientes;
       receta.imagen = el.foto;
       receta.likes = el.likes;
       receta.cocinero = el.cocinero;
       receta.descripcion = el.descripcion;
       receta.isGlutenFree = el.isGlutenFree;

       this.recetas.push(receta);
    });

    return this.recetas;
    */
  }

  /**
   * Crear Nueva Receta
   * @param receta : Receta nueva
   */
  crear( receta: Receta ):void{
    console.log('RecetasService crear %o', receta );
    //this.recetas.unshift(receta);
  }

  

}
