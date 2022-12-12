import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  

  constructor(private cart:CartService  , private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
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


}
