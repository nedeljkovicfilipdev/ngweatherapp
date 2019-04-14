import { Component, OnInit, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { Item } from '../models/Item';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  @Input() item: Item;
  constructor() { }

  ngOnInit() {
  }
  visit(){
  }
}
