import { browser } from "protractor";
import { NotificationPage } from "./notification.po";

describe("Notification List", () => {
  let page: NotificationPage;

  beforeEach(() => {
    page = new NotificationPage();
    browser.get("/");
  });

  it("The button should be initially disabled", () => {
    expect(page.submitBtn.isEnabled()).toBeFalsy();
  });
  it("If an item is selected then the button should become enabled", () => {
    page.matListOptions.first().click();
    expect(page.submitBtn.isEnabled()).toBeTruthy();
  });
});
