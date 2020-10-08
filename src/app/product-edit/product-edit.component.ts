
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../shared/product-service.service';
import { ActivatedRoute, Router , ParamMap} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
   productData: any = {};


  constructor(public productService: ProductServiceService,
    public actRoute: ActivatedRoute,
    public router: Router) {

  }
  ngOnInit() {
    this.productService.getProduct(this.id).subscribe((data: {}) => {
      this.productData = data;
    });
  }
  // Update employee data
 updateProduct() {
    if(window.confirm('Are you sure, you want to update?')){
      this.productService.updateProduct(this.id, this.productData).subscribe(data => {
        this.router.navigate(['/product-list']);
      });
    }
  }


}
