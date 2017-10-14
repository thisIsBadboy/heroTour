import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisDetailComponent } from './crisis-detail.component';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

import { CrisisService } from './crisis.service';

@NgModule({
	declarations: [ CrisisCenterComponent, CrisisDetailComponent ],
	imports: [ CommonModule, FormsModule, CrisisCenterRoutingModule ],
	exports: [],
	providers: [ CrisisService ]
})
export class CrisisCenterModule {

}