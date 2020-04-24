import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockpricefinderService {

  constructor(private http:HttpClient){}

  getStockPrice(symbol:string):Promise<any>{

    let stockPromise:Promise<any> = this.http.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=ZD7V263Y6R84ISCY`).toPromise();
    return stockPromise;
  }


}
