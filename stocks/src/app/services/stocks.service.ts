import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface StockInterface {
    symbol: string;
    lastTradePriceOnly: number;
    change: number;
    changeInpercent: number;
}

export interface StockInterface {
    symbol: string;
    lastTradePriceOnly: number;
    change: number;
    changeInPercent: number;
}

@Injectable()
export class StocksService {

    private stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
    // private service: string = 'https://angular2--in-action--api.herokuapp.com';
    private service: string = 'http://localhost:3000';

    constructor(private http: HttpClient) {}
    
    get(): Array<string> {
        return this.stocks;
    }

    add(stock: string): Array<string> {
        this.stocks.push(stock);
        return this.get();
    }

    remove(stock: string): Array<string> {
        this.stocks.splice(this.stocks.indexOf(stock), 1);
        return this.get();
    }

    load(symbols: Array<string>): any{
        if(symbols) {
            return this.http.get<Array<StockInterface>>(this.service + '/stocks/snapshot?symbols=' + symbols.join());
        }
    }
}