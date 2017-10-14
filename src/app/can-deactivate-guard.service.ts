import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { CrisisDetailComponent } from './crisis-center/crisis-detail.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate< CrisisDetailComponent > {

	canDeactivate(
		component: CrisisDetailComponent,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot
	): Observable<boolean> | boolean {

		if(component.crisis$['value'].name === component.editName)
		return true;

		return confirm("Discard changes?");

	}
}