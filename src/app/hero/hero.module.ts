import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';

import { HeroService } from './hero.service';

import { HeroRoutingModule } from './hero-routing.module';

@NgModule({
	declarations: [ HeroComponent, HeroDetailComponent ],
	imports: [ CommonModule, FormsModule, HeroRoutingModule ],
	exports: [],
	providers: [ HeroService ]
})
export class HeroModule {

}