import { Injectable } from '@angular/core';
import { ProductModule } from '../models/product/product.module';
@Injectable({
  providedIn: 'root'
})
export class CartService {
items:ProductModule[]=[]
num_of_items:any=[]
//this var will use to set total 
new_total:number=0
submit_info:any
constructor() { 

  }
  addToCart(item:ProductModule ,numOFItem:number){
    // const result = this.items.filter((one_item:any) => one_item.id==item.id );
    let num=0
    for (let i =0; i <this.items.length; i++){
    if(this.items[i].id==item.id){
    for(let j=0; j <this.num_of_items.length ; j++){
          if(item.id==this.num_of_items[j].id){
            this.num_of_items[j].num+=numOFItem
          num+=1
          }
    }
    
    }

  }
  if(num==0){
  this.items.push(item)
  this.num_of_items.push({id:item.id,num:numOFItem , price:item.price})

  }
  }
  
  getCart(){
    return this.items
  }
  setNumOfItems(num:number){
   this.num_of_items.push(num)
  }
  get_num_of_Items(){
      
return this.num_of_items
  }

  get_cart_total(){
    let total=0
for (let i = 0; i < this.num_of_items.length; i++) {
total+=this.num_of_items[i].price*this.num_of_items[i].num
  
}
return total   
}

setSubmitInfo(info:any){
  this.submit_info=info
  
     }
  
     getSubmitInfo(){
      return this.submit_info
     }

setTotal(price:number){
  this.new_total=this.get_cart_total()
}

}

