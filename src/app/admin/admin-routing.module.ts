import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ManageCrisisComponent } from './manage-crisis.component';
import { ManageHeroesComponent } from './manage-heroes.component';

import { AuthGuard } from '../auth-guard.service';

const routes: Routes = [
	{ 
		path: 'admin', 
		component: AdminComponent,
		canActivate: [ AuthGuard ],
		children: [
			{ path: 'admin-dashboard', component: AdminDashboardComponent },
			{ path: 'manage-crisis', component: ManageCrisisComponent },
			{ path: 'manage-heroes', component: ManageHeroesComponent },
			{ path: '', component: AdminDashboardComponent }
		]
	},
]

@NgModule({

	declarations: [],
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ],
	providers: []
})
export class AdminRoutingModule {

	
}