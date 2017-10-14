import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComposeMessageComponent } from './compose-message.component';
import { LoginComponent } from './login.component';

const routes : Routes = [
	{ path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
	{ path: 'login', component: LoginComponent }
];

@NgModule({
	declarations: [],
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ],
	providers: [],
})
export class AppRoutingModule {

}