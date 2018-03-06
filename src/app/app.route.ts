import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { HomeComponent } from './home/home.component';
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page404/page404.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RecetarioComponent } from './recetario/recetario.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

//Rutas de nuestra App
const appRoutes: Routes = [
    { path: '',            component: HomeComponent },
    { path: 'home',        component: HomeComponent },
    { path: 'receta',       component: RecetaComponent },
    { path: 'usuario',       component: UsuarioComponent },
    { path: 'propiedades',  component: PropiedadesComponent },   
    { path: 'recetario',       component: RecetarioComponent },
    { path: 'formularios',       component: ReactiveFormsComponent },
    { path: 'concesionario',  component: ConcesionarioComponent },   
    { path: '**',           component: Page404Component }
  ];

export const AppRouter = RouterModule.forRoot(appRoutes);
