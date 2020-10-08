import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../shared/product-service.service';



@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

@Input() productDetails = { name : '', email: '', phone: 0};

constructor(
  public productService: ProductServiceService,
  public router: Router
) { }

addProduct(){

  return this.productService.createProduct(this.productDetails).subscribe((data: {}) => {
    this.router.navigate(['/products-list']);
    console.log(data);
  });

}
  ngOnInit(): void {
  }

}
