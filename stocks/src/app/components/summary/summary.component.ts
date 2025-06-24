import { Component, Input } from '@angular/core';
import { StockInterface } from '../../services/stocks.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'summary',
    standalone: true,
    imports: [BrowserModule],
    styleUrls: ['./summary.component.css'],
    templateUrl: './summary.component.html',
})
export class SummaryComponent {
    @Input() stock!: StockInterface;
    isNegative() {
        return (this.stock && this.stock.change < 0);
    }
    isPositive() {
        return (this.stock && this.stock.change > 0);
    }
}