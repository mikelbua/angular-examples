import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';

/* ****************************************** */
/*   npm install --save-dev jquery            */
/* ****************************************** */
import * as $ from 'jquery';

import { Receta } from '../../model/receta';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {


  formulario : FormGroup;
  ingredientes : FormArray;
  
  constructor( private fb: FormBuilder, public recetasService : RecetasService ) {
    console.log('FormularioComponent constructor');
    this.crearFormulario();    
    this.ingredientes = this.formulario.get('ingredientes') as FormArray;
  }

  ngOnInit() {
    console.log('FormularioComponent ngOnInit');
  }

  crearFormulario():void{
    console.log('FormularioComponent crearFormulario');
    this.formulario = this.fb.group({
      //FormControl(input) => ['value', [Validaciones] ]
      nombre : ['', [Validators.required, Validators.minLength(2)] ],
      cocinero : '',
      ingredientes : this.fb.array([ this.createIngredienteFormGroup() ])
    });
  }

  /** 
   * Creamos un FormGroup para los Ingredientes
   * */  
  createIngredienteFormGroup(): FormGroup {
    console.log('FormularioComponent createIngredienteFormGroup');
    return this.fb.group({
      nombre: ['', [Validators.required]]
    });
  }

  /** 
   * Evento para crear un nuevo Ingrediente
  */
  clickOtroIngrediente(){
    console.log('FormularioComponent clickOtroIngrediente');    
    this.ingredientes.push( this.createIngredienteFormGroup() );
  }

  clickEliminarIngrediente( index ){
    console.log('FormularioComponent clickEliminarIngrediente');    
    this.ingredientes.removeAt(index);
  }

  sumitar():void{
    console.log('FormularioComponent onSubmit');

    //recoger datos del formulario
    let nombre = this.formulario.value.nombre;


    let receta = new Receta(nombre);

    //recuperar los ingredientes
    this.formulario.value.ingredientes.map(element => {
      receta.addIngrediente( element.nombre );
    });
    

    //llamar Servicio
    this.recetasService.crear( receta );

    //limpiar Formulario y poner un solo ingrediente
    this.formulario.reset();
    this.ingredientes.controls.splice(1);


    //TODO cerrar modal    
    //$("#modalReceta").modal('hide');
    $("#btn-close").click();


  }

}
