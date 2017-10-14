import { NgModule } from '@angular/core';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ManageCrisisComponent } from './manage-crisis.component';
import { ManageHeroesComponent } from './manage-heroes.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
	declarations: [ AdminComponent, AdminDashboardComponent, ManageCrisisComponent, ManageHeroesComponent ],
	imports: [ AdminRoutingModule ],
	exports: [],
	providers: [ ]
})
export class AdminModule {

}