import { Component, OnInit,Input } from '@angular/core';
import { ProductModule } from '../models/product/product.module';
import { AddToCartService } from '../services/add-to-cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() item:ProductModule;
  constructor(private addToCartService:AddToCartService) {
    this.item={
    id:1,
    name:"",
    price:0,
    url:"",
    description:"",
   }
  }
  ngOnInit(): void {
    this.addToCartService.isButtonVisible=false
    this.addToCartService.isComponentVisible=false
  }

  //use it when add item to cart
itemDetail(event:any,item:ProductModule){
  this.addToCartService.setItem(item)
console.log(item)
}

setComponentVisibility(){
  this.addToCartService.setComponentVisible()
}
setButtonVisibility(){
  this.addToCartService.setIsButtonVisible()
}

}
