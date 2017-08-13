import { ServiciosConAngularPage } from './app.po';

describe('servicios-con-angular App', () => {
  let page: ServiciosConAngularPage;

  beforeEach(() => {
    page = new ServiciosConAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
