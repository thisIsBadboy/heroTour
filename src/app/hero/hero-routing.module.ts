import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
	{ path: 'heroes', component: HeroComponent },
	{ path: 'heroes/:id', component: HeroDetailComponent }
];

@NgModule({
	declarations: [],
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ],
	providers: []
})
export class HeroRoutingModule {
	
}