import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductModule } from '../models/product/product.module';
@Component({
  selector: 'app-cart-child',
  templateUrl: './cart-child.component.html',
  styleUrls: ['./cart-child.component.css']
})
export class CartChildComponent implements OnInit {
  total=0  
  items:ProductModule[]=[]
numOfItem:any=[]
@Output() getTotalCart = new EventEmitter<number>();
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.items=this.cart.getCart()
    this.numOfItem=this.cart.get_num_of_Items()
    this.total=this.cart.get_cart_total()

  }
  remove(name:string){
    this.cart.remove_item(name)
    this.total=this.getTotal()
    console.log(name)
    }
    
    feedback(){
      alert("item has been removed")
    }
    getTotal(){
      this.total=this.cart.get_cart_total()
     
      return this.total
    }
    getNumberOfItems(id:number){
    
      const result = this.numOfItem.filter((item:any) => item.id==id );
   
  
      return result[0].num
   
   
    }

    getCart(){
      this.items=this.cart.getCart()
    }
  // use it to get items in the cart
  totalPrice(){
    this.getTotalCart.emit(this.total);
  }
}
