import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({

	template: `
		<p>
			Please Login !
		</p>

		<button *ngIf="!authService.isLoggedIn" (click)="login()">Login</button>
		<button *ngIf="authService.isLoggedIn" (click)="logout()">Logout</button>
	`
})
export class LoginComponent {

	constructor(private authService: AuthService, private router: Router) { }

	login() {

		this.authService.login().subscribe(()=>{

			if(this.authService.isLoggedIn) {

				this.router.navigate(['/admin']);
			}
		});
	}

	logout() {

		this.authService.logout();
	}
}