import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighestUpvote]'
})
export class HighestUpvoteDirective {

  constructor(private elem:ElementRef) { 
    elem.nativeElement.style.backgroundColor = "rgba(0,0,255,0.1)"
  }

}
