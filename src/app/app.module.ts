import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComposeMessageComponent } from './compose-message.component';
import { LoginComponent } from './login.component';

import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { HeroModule } from './hero/hero.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CrisisCenterModule,
    HeroModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [ AuthGuard, AuthService, CanDeactivateGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
