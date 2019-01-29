import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '../../../shared/material.module';

import { SearchComponent } from './search.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FeedService } from '../../../core/services/feed.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [ FormsModule, MaterialModule, BrowserAnimationsModule, HttpClientTestingModule ],
      providers: [ FeedService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('', () => {
    beforeEach( () => {

    });

    it('has FeedService injected in constructor', () => {
       expect(component['feedService']).not.toBe(null);
    });

    it('should search for images `flickr`', () => {
       expect(component.searchtext).toEqual('flickr'); 
    });


  });


});
