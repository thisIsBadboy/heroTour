import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {

	isLoggedIn = false;

	login() : Observable<boolean> {

		this.isLoggedIn = true;
		return Observable.of(true);
	}

	logout() :void {

		this.isLoggedIn = false;
	}
}