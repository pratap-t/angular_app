// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// // import { AppComponent } from './app.component';
// import { HttpClientModule } from '@angular/common/http';
// // import { StocksService } from './services/stocks.service'
// import { CommonModule } from '@angular/common';

// @NgModule({
//     imports: [
//         BrowserModule,
//         HttpClientModule,
//     ],
//     bootstrap: []
// })

// export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StocksService } from './services/stocks.service';
import { SummaryComponent } from './components/summary/summary.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { ManageComponent } from './components/manage/manage.component';

@NgModule({
  imports: [
    BrowserModule,
    // AppRoutingModule,
    // HttpClientModule,
    FormsModule,
  ],
  providers: [
    StocksService
  ],
  // bootstrap: [AppComponent]
})
export class AppModule { }