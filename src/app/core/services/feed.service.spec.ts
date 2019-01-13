import { TestBed, getTestBed,async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FeedService } from './feed.service';
import { Images } from '../models/image';

describe('FeedService', () => {
  
  let injector: TestBed;
  let service: FeedService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

  	TestBed.configureTestingModule({
	  	imports: [HttpClientTestingModule],
	  	providers: [FeedService]
	  });
	
  	injector = getTestBed();
  	service = injector.get(FeedService);
  	httpMock = injector.get(HttpTestingController);

  });

  it('should create', () => {
    const service: FeedService = TestBed.get(FeedService);
    expect(service).toBeTruthy();
  });

  describe('', () => {

  	it('getHttpData must return an Observable<Images[]>', () => {
  		service.getHttpData('').subscribe(images => {
        expect(images[0].id).toBeTruthy();
        expect(images[0].title).toBeTruthy();
        expect(images[0].farm).toBeTruthy();
        expect(images[0].server).toBeTruthy();
        expect(images[0].secret).toBeTruthy();
  		});
  	});

  	it('getImagesObservable must return an Observable<Images[]>', () => {
  		service.getImagesObservable().subscribe(images => {
  			expect(images[0].id).toBeTruthy();
        expect(images[0].title).toBeTruthy();
        expect(images[0].farm).toBeTruthy();
        expect(images[0].server).toBeTruthy();
        expect(images[0].secret).toBeTruthy();
      });

  	});
  });
});
