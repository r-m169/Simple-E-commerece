import { Component, OnInit } from '@angular/core';
import { MydataService } from 'src/app/services/mydata/mydata.service';
import { CartService } from '../../services/cart/cart-service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    myData:any;
    myData$:any;

    constructor(private myDataService:MydataService,private cartService: CartService){}

    ngOnInit(): void {
        this.myData$ = this.myDataService.getData()
    }

    addToCart(product: any) {
      this.cartService.addToCart(product);
    }
}
