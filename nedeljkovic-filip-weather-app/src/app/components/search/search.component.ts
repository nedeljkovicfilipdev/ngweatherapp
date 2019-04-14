import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Item } from '../models/Item';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cityName: string;
  searchArray: Item[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.searchService.getSearch(this.cityName).subscribe(searchArray => {
      this.searchArray = searchArray;
    });
  }
}
