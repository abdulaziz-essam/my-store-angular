import { Injectable } from '@angular/core';
import { ProductModule } from '../models/product/product.module';
@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
item:ProductModule

  constructor() {
    this.item={
      id:1,
      name:"",
      price:0,
      url:"",
      description:""
      
     }
   
   }
   setItem(item:ProductModule){
this.item=item

   }
   getItem(){
    return this.item
   }

}
