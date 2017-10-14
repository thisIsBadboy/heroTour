import { Component } from '@angular/core';

import { Crisis, CrisisService } from './crisis.service';

@Component({
	template: `
		<h2>Get your crisis here!</h2>

		<div>
			<ul class="items">
				<li *ngFor="let crisis of crisises">
					<a [routerLink]="['/crisis-center', crisis.id]"><span class="badge">{{ crisis.id }}</span> {{ crisis.name }}</a>
				</li>
			</ul>
		</div>

		<router-outlet></router-outlet>
	`
})
export class CrisisCenterComponent {

	crisises: Crisis[];

	constructor(private crisisService: CrisisService) {

		this.crisises = this.crisisService.getCrisises();
	}
}