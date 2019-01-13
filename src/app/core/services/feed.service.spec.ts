import { TestBed, getTestBed,async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FeedService } from './feed.service';

describe('FeedService', () => {
  
  let injector: TestBed;
  let service: FeedService;
  let httpMock: HttpTestingController;
  let spy: any;



  beforeEach(() => {

  	TestBed.configureTestingModule({
	  	imports: [HttpClientTestingModule],
	  	providers: [FeedService]
	  });
	
  	injector = getTestBed();
  	service = injector.get(FeedService);
  	httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: FeedService = TestBed.get(FeedService);
    expect(service).toBeTruthy();
  });

  describe('', () => {

  	beforeEach(async( () => { 
  		let dummyImages = [{ id: 0, title: 'title', farm: 0, server: 0,secret: ''}];
    }));

  	it('getHttpData must return an Observable<Images[]>', () => {
      
  		service.getHttpData('').subscribe(images => {
  			expect(images).toEqual(this.dummyImages);
  		});
  	});
  	it('getImagesObservable must return an Observable<Images[]>', () => {
  		service.getImagesObservable().subscribe(images => {
  			expect(images).toEqual(this.dummyImages);
  		});
  	});
  });

});
