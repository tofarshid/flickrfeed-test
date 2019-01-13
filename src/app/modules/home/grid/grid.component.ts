import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { MatGridList } from '@angular/material';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';


import { FeedService } from '../../../core/services/feed.service';
import { Images } from '../../../core/models/image';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements AfterContentInit {

  @ViewChild('grid') grid: MatGridList;

  // array map for grid (cols, gutterSize)
  gridByBreakpoint = { xl: 8, lg: 6, md: 4, sm: 2, xs: 1 };
  gridGutter = { xl: '25px', lg: '25px', md: '25px', sm: '15px', xs: '15px' };

  imageData$: Observable<Images[]>;

  constructor(private mediaObserver: MediaObserver, private feedService: FeedService ) {

    // get last feed data from 'Subject' and populate
    this.imageData$ = this.feedService.getImagesObservable().pipe(map(data => data));
  }

  ngAfterContentInit() {

    // set grid cols and gutter size when media query chages
    this.mediaObserver.media$.subscribe( (change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
      this.grid.gutterSize = this.gridGutter[change.mqAlias];
    });

  }
}
