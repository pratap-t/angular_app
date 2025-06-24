import { Component } from '@angular/core';
import { StocksService, StockInterface } from './services/stocks.service';
import { SummaryComponent } from './components/summary/summary.component';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, SummaryComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    stocks: Array<StockInterface> = [];
    constructor(private service: StocksService) {
        service.load(['AAPL']).subcribe(
            (stocks: Array<StockInterface>) => {
            this.stocks = stocks;
            },
            (error: any) => {
                console.error('Error loading stocks:', error);
            }
        );
    }
}