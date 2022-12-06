import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ProductModule } from '../models/product/product.module';
@Injectable({
  providedIn: 'root'
})
export class DataService {
products:ProductModule[]=[]

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        this.products[i]=data[i]
        
      }
    });
}

public getJSON(): Observable<any> {
    return this.http.get("../../assets/data.json");
}

getProducts(){
  return this.products
}

}
