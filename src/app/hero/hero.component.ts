import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero.service';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-hero',
	template: `
		<h2>Your heroes here!</h2>

		<div>
			<ul class="items">
				<li *ngFor="let hero of heroes">
					<a [routerLink]="['/heroes', hero.id]"><span class="badge">{{ hero.id }}</span> {{ hero.name }}</a>
				</li>
			</ul>
		</div>
	`
})
export class HeroComponent implements OnInit {
	
	heroes: Hero[];

	constructor(private heroService: HeroService) {}

	ngOnInit() {
		this.heroes = this.heroService.getHeroes();
	}
}