import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class Crisis {

	id: number;
	name: string;
}

const CRISISES: Crisis[] = [
	{ id: 1, name: 'Dragon Burning Cities' },
	{ id: 2, name: 'Sky rains Great White Sharks' },
	{ id: 3, name: 'Giant Asteroid Heading For North' },
	{ id: 4, name: 'Procrastinators Meeting Delayed Again' }
];

@Injectable() 
export class CrisisService {

	getCrisises() : Crisis[] {

		return CRISISES;
	}

	getCrisis(id: number | string) {

		return Observable.of(CRISISES.find(crisis => id == crisis.id));
	}
}