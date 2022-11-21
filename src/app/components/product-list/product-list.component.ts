import { Component, OnInit } from '@angular/core';
import { ProductModule } from 'src/app/models/product/product.module';
import products_data from '../../../assets/data.json'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products:ProductModule[]=products_data

  constructor() {  

  }

  ngOnInit(): void {


  }

}
