import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'jj-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
	})
export class HeaderComponent implements OnInit {

	@Output()
	menuToggle = new EventEmitter<void>();

	constructor() { }

	ngOnInit() {
	}

	toggle() {
		this.menuToggle.emit();
	}

}
