import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Crisis, CrisisService } from './crisis.service';

@Component({
	selector: 'crisis-detail',
	template: `
		<div *ngIf="crisis$ | async as crisis">
			<h2>"{{ crisis.name }}" Crisis Detail!!</h2>
			<p>id: {{ crisis.id }}</p>
			<p>
				crisis name: <input [(ngModel)]="editName" placeholder="crisis  name" />
			</p>
			<button (click)="save()">Save</button>
			<button (click)="cancel()">Cancel</button>
		</div>
	`
})
export class CrisisDetailComponent implements OnInit {

	editName: string;
	crisis$: Observable<Crisis>;

	constructor(private route: ActivatedRoute, private crisisService: CrisisService, private router: Router) { }

	ngOnInit() {

		this.route.params.subscribe((params: Params) => {

			this.crisis$ = this.crisisService.getCrisis(params['id']);
			this.editName = this.crisis$['value'].name;
		});

		//this.route.params.switchMap((params: Params) => this.crisisService.getCrisis(params.get('id')));
	}

	save() {

		this.crisis$['value'].name = this.editName;
		this.gotoCrisis();
	}

	cancel() {

		this.gotoCrisis();
	}

	gotoCrisis() {

		this.router.navigate(['../'], { relativeTo: this.route });
	}
}