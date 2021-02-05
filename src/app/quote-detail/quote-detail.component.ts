import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isRead = new EventEmitter<boolean>();

  quoteDelete(read: boolean) {
    this.isRead.emit(read);
  }


  thumbsUp = 0;
  upVote() {
    this.thumbsUp++
  }

  thumbsDown = 0;
  downVote() {
    this.thumbsDown++
  }
  constructor() { }

  ngOnInit(): void {
  }

}

