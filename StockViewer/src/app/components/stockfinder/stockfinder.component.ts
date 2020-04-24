import { Component, OnInit } from '@angular/core';
import { StockpricefinderService } from 'src/app/services/stockpricefinder.service';

@Component({
  selector: 'app-stockfinder',
  templateUrl: './stockfinder.component.html',
  styleUrls: ['./stockfinder.component.css']
})
export class StockfinderComponent implements OnInit {

  constructor(private stockpricesearch:StockpricefinderService) { }

  stocksymbol:string;

  stockprice:any;
  records:Array<string> = [];

  ngOnInit(): void {
  }

  async findPrice(){
    let term = "";

    console.log("Symbol: " + this.stocksymbol);
    this.stockprice = await this.stockpricesearch.getStockPrice(this.stocksymbol);
    console.log(this.stockprice);
    let prices= this.stockprice['Time Series (5min)'];

    for(let datetime in prices){  // datetime is the date and time attribute name
      let open = (prices[datetime]["1. open"]);
      let high = (prices[datetime]["2. high"]);
      let low = (prices[datetime]["3. low"]);
      let close = (prices[datetime]["4. close"]);
      let volumn = (prices[datetime]["5. volume"]);

      term = `Open: ${open}, High: ${high}, Low: ${low}, Close: ${close}, Volumn: ${volumn}`;
      console.log(term);
      this.records.push(term);
    }
  }

}
