import { Component, OnInit } from '@angular/core';
import { ProductModule } from 'src/app/models/product/product.module';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
item:ProductModule
selectedItem=''
selectedNumber=1
  constructor(private addToCart:AddToCartService ,private cart:CartService) {
    this.item={
      id:1,
      name:"",
      price:0,
      url:"",
      description:""
    }
  }

  ngOnInit(): void {
    this.item=this.addToCart.getItem()
  }
  sendToCart(event:any,item:ProductModule){

this.cart.addToCart(item,this.selectedNumber)
  }
itemNumber(num:number){
  this.selectedNumber=num
  this.cart.setNumOfItems(this.selectedNumber)
  console.log(this.selectedNumber)
}
}
