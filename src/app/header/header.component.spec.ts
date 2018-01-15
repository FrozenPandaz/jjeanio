import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				MatToolbarModule,
				MatButtonModule,
				MatIconModule
			],
			declarations: [ HeaderComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should emit when the menu button is clicked', (done: DoneFn) => {
		component.menuToggle.subscribe(() => {
			done();
		});
		fixture.nativeElement.querySelector('button').click();
	});

	describe('the view', () => {
		it('should have a menu button', () => {
			expect(fixture.nativeElement.querySelector('button mat-icon').innerText).toBe('menu');
		});

		it('should say Jason Jean', () => {
			expect(fixture.nativeElement.querySelector('h2').innerText).toBe('Jason Jean');
		});
	});
});
