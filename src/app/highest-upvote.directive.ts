import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighestUpvote]'
})
export class HighestUpvoteDirective {

  constructor(private elem:ElementRef) { 
    elem.nativeElement.style.backgroundColor = "blue"
  }

}
