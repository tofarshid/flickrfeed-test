import { Injectable } from '@angular/core';

// add
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Images } from '../models/image';
import { createHttpObservable } from '../../shared/util';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private imageData: Subject<Images[]> = new Subject<Images[]>();

  constructor( private httpClient: HttpClient) { }

  // getter setter

  getImagesObservable(): Observable<Images[]> {
    return this.imageData.asObservable();
  }

  setImagesObservable(images: Images[]): void {
    this.imageData.next(images);
  }

  // getHttpData (main)

  getHttpData(searchText: string): Observable<any>{

    searchText = (searchText.length == 0 ? 'isentia' : searchText);
    const url: string = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c0125f0d5b26b3cadaa23035114f7264&text=soccer&format=json&nojsoncallback=1&text=' + searchText;
    const http$ = createHttpObservable(url);

    return http$.pipe(
      map(res => Object.values(res))
    );
  }


}