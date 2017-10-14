import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class Hero {

	constructor(public id: number, public name: string) {}
}

const HEROES: Hero[] = [
	new Hero(1, 'Wolverine'),
	new Hero(2, 'Spiderman'),
	new Hero(3, 'Deadpool')
];

@Injectable()
export class HeroService {

	constructor() {

	}

	getHeroes() {

		return HEROES;
	}

	getHero(id: number | string) {

		return Observable.of(HEROES.find(hero => hero.id == id));
	}
}