import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators  } from '@angular/forms';

import { Address, Hero, STATES } from './data-model';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  
  heroForm : FormGroup;
  hero : Hero;
  states = STATES;
  
  constructor(private fb: FormBuilder) {
    console.log('ReactiveFormsComponent constructor');

    

    this.heroForm = this.fb.group({
      name: ['', Validators.required], 
      address : this.fb.group( new Address() ),
      power: '',
      sidekick: ''
    });

    this.hero = new Hero();
    this.heroForm.patchValue({
      name:    this.hero.name,
      address: new Address() //this.hero.addresses[0] || new Address()
    });

  }

  ngOnInit() {
    console.log('ReactiveFormsComponent ngOnInit');
  }

}
