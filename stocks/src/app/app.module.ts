import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { StocksService } from './services/stocks.service'
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
    ],
    bootstrap: []
})

export class AppModule {}