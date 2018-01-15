import { async, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { SidenavModule } from './sidenav/sidenav.module';

describe('AppComponent', () => {
	let app: AppComponent;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				MatSidenavModule,
				HeaderModule,
				SidenavModule
			],
			declarations: [
				AppComponent
			],
		}).compileComponents();
	}));

	beforeEach(() => {
		const fixture = TestBed.createComponent(AppComponent);
		app = fixture.debugElement.componentInstance;
	});

	it('should create the app', () => {
		expect(app).toBeTruthy();
	});
});
