import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatListModule } from '@angular/material';

import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
	let component: SidenavComponent;
	let fixture: ComponentFixture<SidenavComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				MatListModule
			],
			declarations: [ SidenavComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SidenavComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('the view', () => {
		it('should have a mat-list', () => {
			expect(fixture.nativeElement.querySelector('mat-nav-list')).toBeTruthy();
		});
	});
});
