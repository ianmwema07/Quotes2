import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,"Hello","Ian","Jack",2, 3, new Date(2022,4,7)),
    new Quote(2,"Hello","Harry", "Tess",1,3, new Date(2022,1,8)),
    new Quote(1,"Hello","Harry", "Tess",0,3, new Date(2022,1,8)),
    
  ];

  collection: number[] = this.quotes.map(quote=>quote.upvote)
  highest = Math.max(...this.collection)

 
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }

  upVote(index:number){ 
    this.quotes[index].upvote++;
  }

  downVote(index:number){
    this.quotes[index].downvote++;
  }

  showDetails(index:number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }}
  }



  constructor() { }

  ngOnInit(): void {
  }

}
