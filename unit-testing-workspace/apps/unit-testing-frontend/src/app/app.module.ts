import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing-module';
import { MocksAndSpiesComponent } from './chapter-4-mocks-and-spies/mocks-and-spies.components';
import {
  ExampleAssertionsComponent
} from './chapter-3-writing-good-tests/example-assertions/example-assertions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DinosaurListComponent } from './dinosaur-list/dinosaur-list.component';
import { KpiCardComponent } from './dashboard/kpi-card/kpi-card.component';
import { ParkListComponent } from './park-list/park-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    KpiCardComponent,
    DinosaurListComponent,
    ParkListComponent,
    MocksAndSpiesComponent,
    ExampleAssertionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
