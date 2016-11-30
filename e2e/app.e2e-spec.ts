import { Tp2Page } from './app.po';

describe('tp2 App', function() {
  let page: Tp2Page;

  beforeEach(() => {
    page = new Tp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
