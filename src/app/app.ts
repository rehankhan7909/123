import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './services/products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  productList:any;
  constructor(private productService:ProductsService){}

  ngOnInit(){
    this.productService.getProductList().subscribe((data:any)=>{
      console.log(data);
      this.productList=data.products;
      
    });  
  }
}
