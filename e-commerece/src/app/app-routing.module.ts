import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
  {
    path:'',
    component:ProductsComponent,
  
  },
  { path: 'login', component: LoginComponent },
  {
    path:'cart',
    component:CartComponent,
    
  },
  {
    path:'details/:productId',
    component:ProductDetailsComponent,
    
  },
  {
    path:'register',
    component:RegisterComponent,
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
