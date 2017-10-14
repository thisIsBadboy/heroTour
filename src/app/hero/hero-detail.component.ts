import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Hero } from './hero.service';
import { HeroService } from './hero.service';

@Component({
	template: `
		<div *ngIf="hero$ | async as hero">
			<h2>{{ hero.name }} Detail</h2>

			<p>id: {{ hero.id }}</p>
			<p>
				name: <input [(ngModel)]="hero.name" placeholder="Hero name" />
			</p>

			<button (click)="gotoHeroes()">Back</button>
		</div>
	`
})
export class HeroDetailComponent implements OnInit{

	hero$: Observable<Hero>;
	constructor(
		private route: ActivatedRoute, 
		private router: Router,
		private heroService: HeroService) {}

	ngOnInit() {

		this.route.params.subscribe((params: Params) => {
			
			let heroId = params['id'];

			this.hero$ = this.heroService.getHero(heroId);
		});
	}

	gotoHeroes() {

		this.router.navigate(['/heroes']);
	}
}