import { MeetupOrganizerPage } from './app.po';

describe('meetup-organizer App', () => {
  let page: MeetupOrganizerPage;

  beforeEach(() => {
    page = new MeetupOrganizerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
