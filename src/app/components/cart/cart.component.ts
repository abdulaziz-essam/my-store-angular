import { Component, OnInit } from '@angular/core';
import { ProductModule } from 'src/app/models/product/product.module';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items:ProductModule[]=[]
numOfItem:any=[]
total=0  



checkoutForm = this.formBuilder.group({
  name: '',
  address: ''
});

constructor(private cart:CartService , private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.items=this.cart.getCart()
this.numOfItem=this.cart.get_num_of_Items()
this.total=this.cart.get_cart_total()
console.log(this.numOfItem)

//use to check form data
  }

  getNumberOfItems(id:any){
    
    const result = this.numOfItem.filter((item:any) => item.id==id );
 

    return result[0].num
 
 
  }

  onSubmit(form:any): void {
    // Process checkout data here

  }

//
getTotal(){
  this.total=this.cart.get_cart_total()
  return this.total
}

//this method to remove specific item
remove(name:string){
this.cart.remove_item(name)
this.getTotal()
console.log(name)
}

feedback(){
  alert("item has been removed")
}



}
