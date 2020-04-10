import { element, by } from "protractor";
export class NotificationPage {
  get submitBtn() {
    return element(by.className("delete-btn"));
  }

  get matListOptions() {
    return element.all(by.tagName("mat-list-option"));
  }
}
