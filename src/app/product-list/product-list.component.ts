import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../shared/product-service.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  Product: any = [];

  constructor(private productService: ProductServiceService) {

   }
   loadProducts() {

       return this.productService.getPdoduct().subscribe((data : {}) => {
         this.Product = data;
       })
 }

deleteProduct(id){

  if(window.confirm('are you sure to delete product')){
    this.productService.deleteProduct(id).subscribe(data => {
      this.loadProducts();
    })
  }

}

  ngOnInit(): void {

       this.loadProducts();
  }


}
