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
items:ProductModule[]=[]
numOfItem:any=[]
total=0  



checkoutForm = this.formBuilder.group({
  name: '',
  address: ''
});

constructor(private cart:CartService  , private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.items=this.cart.getCart()
this.numOfItem=this.cart.get_num_of_Items()
this.total=this.cart.get_cart_total()
console.log(this.numOfItem)

//use to check form data
  }

  getNumberOfItems(id:number){
    
    const result = this.numOfItem.filter((item:any) => item.id==id );
 

    return result[0].num
 
 
  }

  addNewItem(value: ProductModule,num:number) {
    alert("this is output")
this.cart.addToCart(value,Number(num))
  }
 

  addToCart(item:ProductModule,num:number){

  }
  onSubmit(name:string): void {
    // Process checkout data here

  console.log(this.checkoutForm.value)
    console.warn('Your order has been submitted', this.checkoutForm.value);
 
    // this.checkoutForm.reset();
  
if(!this.isNumber(name)){
  this.cart.setSubmitInfo(this.checkoutForm.value)
  this.router.navigate(['/success'])
}else{
  alert("wrong this number not name")
}
    }

//check if user name is valid or not
isNumber(n:any) {
   return !isNaN(parseFloat(n)) && !isNaN(n - 0)
   }



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
