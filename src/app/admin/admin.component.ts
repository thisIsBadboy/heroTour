import { Component } from '@angular/core';

@Component({

	template: `
		<h2>This is admin area!</h2>

		<nav>
			<a [routerLink]="['/admin/admin-dashboard']">Dashboard</a>
			<a [routerLink]="['/admin/manage-crisis']">Manage Crisis</a>
			<a [routerLink]="['/admin/manage-heroes']">Manage Heroes</a>
		</nav>

		<router-outlet></router-outlet>
	`
})
export class AdminComponent {


}