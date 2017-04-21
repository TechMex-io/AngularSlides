import { SlidesProjectPage } from './app.po';

describe('slides-project App', () => {
  let page: SlidesProjectPage;

  beforeEach(() => {
    page = new SlidesProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
