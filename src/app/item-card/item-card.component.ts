import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../item-detail/item-detail.component';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() item: Item;
  constructor() { }

  ngOnInit() {
  }

}
