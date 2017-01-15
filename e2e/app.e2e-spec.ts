import { Anguemy4Page } from './app.po';

describe('anguemy4 App', function() {
  let page: Anguemy4Page;

  beforeEach(() => {
    page = new Anguemy4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
