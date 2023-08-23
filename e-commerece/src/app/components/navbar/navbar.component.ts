import { Component,OnInit} from '@angular/core';
import {CartService} from '../../services/cart/cart-service.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartItemsCount: number = 0;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartItemsCount = this.cartService.getCartItems().length;

    // Subscribe to changes in cart items count
    this.cartService.cartItemsChanged.subscribe(() => {
      this.cartItemsCount = this.cartService.getCartItems().length;
    });
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
