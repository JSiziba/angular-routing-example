import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainGridComponent } from './components/main-grid/main-grid.component';
import { TableOutlineComponent } from './components/tables/table-outline/table-outline.component';
import { TimeSeriesComponent } from './components/tables/time-series/time-series.component';
import { EntitiesComponent } from './components/tables/entities/entities.component';
import { ResultsComponent } from './components/tables/results/results.component';
import { RelationshipsComponent } from './components/tables/relationships/relationships.component';

@NgModule({
  declarations: [
    AppComponent,
    MainGridComponent,
    TableOutlineComponent,
    TimeSeriesComponent,
    EntitiesComponent,
    ResultsComponent,
    RelationshipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
