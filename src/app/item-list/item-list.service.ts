import { Item } from './item.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ItemListService {
    itemsUrl: 'item-list';
    constructor(private http: Http) { }
    getItemList(): Observable<Item[]> {
        return this.http.get('http://localhost:3000/item-list')
        .map( (res: Response) => res.json() )
        .catch( (error: any) => Observable.throw(error.json().error || 'server error') );
    }

    updateItem(item: Item): Observable<Item[]> {
        const headers = new Headers({ 'Content-Type': 'application/json'});
        const options = new RequestOptions({ headers: headers });

        return this.http.put(`${this.itemsUrl}/$(item['id'])`, item, options)
        .map( (res: Response) => res.json() )
        .catch( (error: any) => Observable.throw(error.json().error || 'server error') );
      }

}
