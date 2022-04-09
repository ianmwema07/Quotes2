import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    {id: 1,quote: "Hello",author: "Ian",name: "Jack",upvote: 2, downvote: 3},
    {id: 2,quote: "Hello",author: "Ian", name: "Jack",upvote: 2,downvote: 3},
       
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
