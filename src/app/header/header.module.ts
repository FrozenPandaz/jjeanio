import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { HeaderComponent } from './header.component';

@NgModule({
	imports: [
		CommonModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule
	],
	declarations: [HeaderComponent],
	exports: [
		HeaderComponent
	]
})
export class HeaderModule { }
