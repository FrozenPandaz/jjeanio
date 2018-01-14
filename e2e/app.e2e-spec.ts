import { AppPage } from './app.po';

describe('jjeanio App', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should display welcome message', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual(`Welcome to Jason Jean's Website`);
	});
});
