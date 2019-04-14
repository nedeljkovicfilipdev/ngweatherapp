import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { Item } from '../../models/Item';
import { City } from '../../models/City';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  searchArray: Item[];
  aboutCity: any[];
 // title: string;
  private sub: any;


  constructor(private ss: SearchService, private route: ActivatedRoute) { }

  ngOnInit() {
   // this.title = this.route.params.subscribe(params => console.log(params));
    const title = this.route.snapshot.paramMap.get('title');
    const woeid = this.route.snapshot.paramMap.get('woeid');
    this.ss.getSearch(title).subscribe(searchArray => {
    this.searchArray = searchArray;
   });
    this.ss.getWeather(woeid).subscribe(aboutCity => {
      // this.aboutCity = aboutCity;
      console.log(aboutCity);
      this.aboutCity = aboutCity;
      // console.log(aboutCity);
    });

  }
}
