import { Component } from '@angular/core';
import { NgForm }   from '@angular/forms';

import { FeedService } from '../../../core/services/feed.service';
import { Images } from '../../../core/models/image';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{

  searchtext: string = "flickr";

  constructor(private feedService: FeedService) { }

  onSubmit(form: NgForm) {

    // fetch data on button clicked
  	this.feedService.getHttpData(form.form.value.searchtext).subscribe(
  		images => { this.feedService.setImagesObservable(images); }
  	);
  }
}