import { Client } from './client.model';
import { Injectable } from '@angular/core';


@Injectable()
export class FormService {

    client: Client;

    constructor() {
    }

     // tslint:disable-next-line:use-life-cycle-interface
     ngOnInit() {

     }

      addClient(client: Client) {
       this.client = client;
      }

}
