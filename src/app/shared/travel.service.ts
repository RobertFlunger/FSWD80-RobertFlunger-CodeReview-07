import { Injectable } from '@angular/core';

import { FormControl , FormGroup , Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class TravelService {

	travelList: AngularFireList<any>;

  	constructor(private firebase: AngularFireDatabase) { }

	form = new FormGroup({
     	$key: new FormControl(null),
     	destination: new FormControl('', Validators.required),
     	price: new FormControl('', Validators.required),
     	type: new FormControl('', Validators.required),
     	description: new FormControl('', Validators.required),
     	image: new FormControl('')
        });

	getTravels() {
		this.travelList = this.firebase.list("travels");
		return this.travelList.snapshotChanges();
	}

	insertTravels(travel) {
		this.travelList.push({
			destination: travel.destination,
			price: travel.price,
			type: travel.type,
			description: travel.description,
			image: travel.image
		})
	}

	populateForm(travel) {
		this.form.setValue(travel);
	}

	updateTravel(travel) {
		this.travelList.update(travel.$key, {
			destination: travel.destination,
			price: travel.price,
			type: travel.type,
			description: travel.description,
			image: travel.image
		});
	}

	deleteTravel($key: string) {
		this.travelList.remove($key);
	}
}

