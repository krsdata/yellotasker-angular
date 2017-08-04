import { YellotaskerPage } from './app.po';

describe('yellotasker App', () => {
  let page: YellotaskerPage;

  beforeEach(() => {
    page = new YellotaskerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
