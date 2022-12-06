import { Component, OnInit } from '@angular/core';
import { ProductModule } from 'src/app/models/product/product.module';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products:ProductModule[]=[]

  constructor(private data:DataService) {  

  }

  ngOnInit(): void {
this.data.getJSON()
this.products=this.data.getProducts()

  }

}
