import { Component, OnInit } from '@angular/core';
import { FeedService } from './core/services/feed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'isentia-test';

  constructor(private feedService: FeedService) {}

  ngOnInit() {

  	// app init
  	this.feedService.getHttpData('').subscribe(
  		images => { this.feedService.setImagesObservable(images); }
  	);
  }
}
