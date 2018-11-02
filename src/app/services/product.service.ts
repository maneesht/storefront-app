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
      image: ""
    },
    {
      id: 2,
      name: "Sneakers",
      description: "The greatest shoes you've ever seen",
      image: ""
    },
    {
      id: 3,
      name: "Sneakers",
      description: "The greatest shoes you've ever seen",
      image: ""
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
