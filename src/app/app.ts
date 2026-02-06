import { Component, linkedSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './services/products';
import { FormsModule } from '@angular/forms';
import { User } from './Interface/User';
import { CommonModule } from '@angular/common';
import { Userservice } from './service/user';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // productList:any;
  // constructor(private productService:ProductsService){}

  // ngOnInit(){
  //   this.productService.getProductList().subscribe((data:any)=>{
  //     console.log(data);
  //     this.productList=data.products;
      
  //   });  
  // }




  // with variable without any

   users:User[]=[];
  constructor(private userService:Userservice){}

  // ngOnInit(){
  //   this.userService.getUsers().subscribe((data:User[])=>{
  //     this.users = data;
  //     console.log(data);
     
      
  //   });  
  // }
  // post api

//  for show data on Display


ngOnInit(){
  this.getUser()
}
  getUser(){
    this.userService.getUsers().subscribe((data:User[])=>{
      this.users = data;
      console.log(data);  
    });  
  }

  addUser(user:User){
    this.userService.saveUser(user).subscribe((data:User)=>{
       console.log(data); 
       if(data){
        this.getUser()
       }
    })
  }
  


  // for delete 
  deleteUser(id:string){
    this.userService.deleteUser(id).subscribe((data:User)=>{
   console.log(id);
   if(data){
        this.getUser()
       }
    })
    }


}
