import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

export interface Item {
  name: string;
  description: string;
  image: string;
  price: number;
}
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Item;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.item = this.productService.getItem(+id);
  }

  ngOnInit() {
  }

}
