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

  // let dummyImages: Images[] = [
  //   Object({ id: '45196013881', owner: '167001463@N02', secret: '388e0cf75f', 
  //   server: '1960', farm: 2, 
  //   title: 'Duncan Calder KPMG, from Ken Court to Li Ping, Oakajee'})];

  it('should be created', () => {
    const service: FeedService = TestBed.get(FeedService);
    expect(service).toBeTruthy();
  });

  describe('', () => {

  	it('getHttpData must return an Observable<>', () => {
  		service.getHttpData('').subscribe(images => {
  			expect(images).not.toBe(null);
  		});
  	});

  	it('getImagesObservable must return an Observable<>', () => {
  		service.getImagesObservable().subscribe(images => {
  			expect(images).not.toBe(null);
  		});


      service['imageData'].subscribe(x => {
        console.log(x);
      });

  	});
  });
});
