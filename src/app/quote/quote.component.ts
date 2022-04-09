import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1,"Hello","Ian","Jack",2, 3, new Date(2022,1,5)),
    new Quote(2,"Hello","Harry", "Tess",2,3, new Date(2022,1,8)),
    
  ];
 
  upVote(index:number){ 
    this.quotes[index].upvote++;
  }

  downVote(index:number){
    this.quotes[index].downvote++;
  }

  showDetails(index:number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  completeQuote(isComplete: any, index: number){
    if(isComplete) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
