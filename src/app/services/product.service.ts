import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    {
      id: 1,
      name: "Sneakers",
      description: "The greatest shoes you've ever seen",
      image: "",
      price: 3
    },
    {
      id: 2,
      name: "Sneakers",
      description: "The second greatest shoes you've ever seen",
      image: "",
      price: 2
    },
    {
      id: 3,
      name: "Sneakers",
      description: "The third greatest shoes you've ever seen",
      image: "",
      price: 1
    }
  ]
  constructor() { }

  getItems() {
    return this.products;
  }

  getItem(id: number) {
    return this.products.find((item) => { return item.id === id});
  }
}
