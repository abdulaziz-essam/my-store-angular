import { Component, OnInit } from '@angular/core';
import { ProductModule } from 'src/app/models/product/product.module';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { CartService } from 'src/app/services/cart.service';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {
item:ProductModule

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
 
@Output() newItemEvent = new EventEmitter<ProductModule>();
@Output() selectedItem = new EventEmitter<string>();
tenant: any = {name:'asd',nodes:[1,2,3,4,5]};
name = 'Angular 5';
//this varible to know number of item
selectedNode: number=1

//varible value when componet show up

  ngOnInit(): void {
    this.item=this.addToCart.getItem()

  }
  //this method to send item to cart in cart service
  sendToCart(item:ProductModule){

//casting numOfItem from string to number

this.cart.addToCart(item,this.selectedNode)
  }

  // this method to set number of items
itemNumber(num:number){

  this.cart.setNumOfItems(num)
  console.log("this num"+num)
}

  // @output

  addNewItem(value: ProductModule,num:string ) {
this.cart.addToCart(value,Number(num))
    this.newItemEvent.emit(value);
  //we get num as string from ui and in cart we will change it to number
    this.selectedItem.emit(num);
  }
    // @output


//this method to change value if selected number changed
  onSelection(node:number){
  
  console.log(node)
  }

//change varible value from true to false
  setIsButtonVisible(){
//     if(this.isButtonVisible==true){
//  this.isButtonVisible=false
// }else{
//   this.isButtonVisible=true
// }
this.addToCart.setIsButtonVisible()
}

setcomponentVisible(){
 
  this.addToCart.setComponentVisible()
  }
  
  getIsButtonVisible(){
return this.addToCart.isButtonVisible
  }
  getcomponentVisible(){
return this.addToCart.isComponentVisible
  }


  statusChanged(numOfItem:string){
this.selectedNode=Number(numOfItem)    
  }


  feedback(){
    alert("you add new item to the cart")
  }
}
