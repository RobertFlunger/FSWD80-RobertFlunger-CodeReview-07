import { Component, OnInit } from '@angular/core';
import { TravelService } from '../shared/travel.service';

@Component({
  selector: 'app-travel-cards',
  templateUrl: './travel-cards.component.html',
  styleUrls: ['./travel-cards.component.css']
})
export class TravelCardsComponent implements OnInit {
	travelArray = [];
	
  constructor(private travelService: TravelService) { }

  ngOnInit() {
  	this.travelService.getTravels().subscribe(
  		(list) => {
  			this.travelArray = list.map( (item) => {
  				return {
  					$key : item.key,
  					...item.payload.val()
  				}
  			});
  		});
  }

}
