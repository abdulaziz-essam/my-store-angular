import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductModule } from 'src/app/models/product/product.module';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
totalPrice=0





constructor(private cart:CartService  , private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {

this.totalPrice=this.cart.get_cart_total()

//use to check form data
  }


  addNewItem(value: ProductModule,num:number) {
    alert("this is output")
this.cart.addToCart(value,Number(num))
  }
 
 



  getTotal(){
    this.totalPrice=this.cart.get_cart_total()
   
    return this.totalPrice
  }
  


}
