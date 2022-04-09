import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,"Hello","Ian","Jack",2, 3),
    new Quote(2,"Hello","Harry", "Tess",2,3),
    
  ];

  showDetails(index:number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
