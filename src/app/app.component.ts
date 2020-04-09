/**
 * * Dependencies
 */
import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  notifications = [
    {
      _id: "cd8309a4-b5a1-45bd-a89a-5a99486575fd",
      value: "Notification 1",
      createdAt: new Date(),
    },
    {
      _id: "61667fd8-ea88-47f1-a032-81972efaa45a",
      value: "Notification 2",
      createdAt: new Date(),
    },
    {
      _id: "a0d0c7bc-48af-4b0d-b56c-6373cc0bd51f",
      value: "Notification 3",
      createdAt: new Date(),
    },
    {
      _id: "aadc66b7-259d-4525-866b-cbb44dc1ac99",
      value: "Notification 4",
      createdAt: new Date(),
    },
    {
      _id: "961ede05-1612-4508-9b1f-a18659ed6fc4",
      value: "Notification 5",
      createdAt: new Date(),
    },
  ];
  @ViewChild("notificationList") notificationList: any;

  constructor() {}

  ngOnInit(): void {}

  public async onDeleteMarkedItems() {
    const idOfSelectedNotifications: string[] = this.notificationList.selectedOptions.selected.map(
      (e: any) => e.value
    );

    this.removeNotificationsOnUI(idOfSelectedNotifications);
  }

  // * remove items from array
  private removeNotificationsOnUI(ids: string[]) {
    const index: number = this.notifications.findIndex(
      (e: any) => e._id === ids[0]
    );
    this.notifications.splice(index, 1);
    ids.shift();
    if (ids.length) {
      this.removeNotificationsOnUI(ids);
    }
  }
}
