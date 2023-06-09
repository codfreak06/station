import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgApexchartsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
