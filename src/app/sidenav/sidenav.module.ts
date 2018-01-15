import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material';
import { SidenavComponent } from './sidenav.component';

@NgModule({
	imports: [
		CommonModule,
		MatListModule
	],
	declarations: [SidenavComponent],
	exports: [SidenavComponent]
})
export class SidenavModule { }
