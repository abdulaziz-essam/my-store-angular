import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-success-order',
  templateUrl: './success-order.component.html',
  styleUrls: ['./success-order.component.css']
})
export class SuccessOrderComponent implements OnInit {
user_info:any

total:number=0
  constructor(private cart:CartService) {

   }

  ngOnInit(): void {
    console.log("this is submit information  "+this.cart.getSubmitInfo() )
   this.user_info= this.cart.getSubmitInfo()
  this.total=this.cart.get_cart_total()
  }

}
