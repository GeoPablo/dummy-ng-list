import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTabsModule } from "@angular/material/tabs";

const mat = [
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatCardModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatTabsModule,
  MatSnackBarModule,
];

@NgModule({
  imports: [...mat],
  exports: [...mat],
})
export class MaterialModule {}
