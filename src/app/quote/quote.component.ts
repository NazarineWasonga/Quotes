import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,`The greatest glory in living lies not in never falling, but in rising every time we fall.`,`Nelson`,`Nelson Mandela`, new Date(2021,1,7), 0,0),

    new Quote(2,`If you look at what you have in life, you will always have more.If you look at what you do not have in life, you will never have enough.`,`Oprah`,`Oprah Winfrey`, new Date(2021,1,29),0,0),

    new Quote(3,`Life is what happens when you are busy making other plans.`,`John`,`John Lennon`,new Date(2021,1,9),0,0),
 
    new Quote(4, `No one is perfect - that’s why pencils have erasers.`, `Nazryn`, `Doryne boit`, new Date(2021, 1, 19 ),0,0),
];
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.postedOn = new Date(quote.postedOn)
    this.quotes.unshift(quote)
  }
  
  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  // deleting quotes
  readQuote(isRead, index) {
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete${this.quotes[index].name}?`)

      if (toDelete) {
        this.quotes.splice(index, 1);
      }

    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
