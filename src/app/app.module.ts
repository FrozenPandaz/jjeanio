import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { SidenavModule } from './sidenav/sidenav.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		AppRoutingModule,
		BrowserAnimationsModule,
		MatSidenavModule,
		ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
		HeaderModule,
		HomeModule,
		SidenavModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
