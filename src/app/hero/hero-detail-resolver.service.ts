import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Hero, HeroService } from './hero.service';

@Injectable()
export class HeroDetailResolver implements Resolve<Hero> {

	resolve(
    	route: ActivatedRouteSnapshot,
    	state: RouterStateSnapshot
	): Observable<any>|Promise<any>|any {
		
	}
}