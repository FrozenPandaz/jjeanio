import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'jj-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
