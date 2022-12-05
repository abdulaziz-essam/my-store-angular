import { Injectable } from '@angular/core';
import { ProductModule } from '../models/product/product.module';
@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
item:ProductModule

isComponentVisible:boolean=false
//this varible check if button visible or not
isButtonVisible :boolean= true; 
  constructor() {
    this.item={
      id:1,
      name:"",
      price:0,
      url:"",
      description:""
      
     }
   
   }

  //itrms information
   setItem(item:ProductModule){
this.item=item

   }
   getItem(){
    return this.item
   }

   setIsButtonVisible(){
    if(this.isButtonVisible==true){
      this.isButtonVisible=false
    
    }else {
      this.isButtonVisible=true
     
    }
   
   
    }

    setComponentVisible(){
if(this.isComponentVisible==true){
  this.isComponentVisible=false
 
}else{
  this.isComponentVisible=true

}
    }
}
