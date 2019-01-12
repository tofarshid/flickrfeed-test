import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { MatGridList } from '@angular/material';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements AfterContentInit {

  @ViewChild('grid') grid: MatGridList;
  watcher: Subscription;

  gridByBreakpoint = { xl: 8, lg: 6, md: 4, sm: 2, xs: 1 };
  gridGutter = { xl: '25px', lg: '25px', md: '25px', sm: '15px', xs: '15px' };


  constructor(private mediaObserver: MediaObserver) { }

    ngAfterContentInit() {
      this.watcher = this.mediaObserver.media$.subscribe( (change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
      this.grid.gutterSize = this.gridGutter[change.mqAlias];
    });
  }
}
