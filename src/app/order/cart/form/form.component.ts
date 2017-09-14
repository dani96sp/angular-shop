import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  client: Client;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'preference': ['', Validators.required]
    });

  }

  ngOnInit() {
  }


  onSubmit() {
    console.log('form submitted');
    console.log(this.form);
    this.client = new Client();
    this.client.name = this.form.value.name;
    this.client.email = this.form.value.email;
    this.client.preference = this.form.value.preference;
    console.log(this.client);
    return alert('Se ha enviado la peticion del carrito (no)');
  }


}
