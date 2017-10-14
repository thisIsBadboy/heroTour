import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail.component';

import { CanDeactivateGuard } from '../can-deactivate-guard.service';

const routes: Routes = [
	{ 
		path: 'crisis-center', 
		component: CrisisCenterComponent,
		children: [
			{
				path: ':id',
				component: CrisisDetailComponent,
				canDeactivate: [ CanDeactivateGuard ] 
			}
		]
	}
];

@NgModule({
	declarations: [],
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ],
	providers: []
})
export class CrisisCenterRoutingModule {

}