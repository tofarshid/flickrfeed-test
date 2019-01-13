import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Subscription, Observable, of } from 'rxjs';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';

import { MaterialModule } from '../../../shared/material.module';

import { GridComponent } from './grid.component';

import { FeedService } from '../../../core/services/feed.service';
import { Images } from '../../../core/models/image';


import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;
  let images$: Observable<Images[]>;  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridComponent ],
      imports: [ FormsModule, MaterialModule, BrowserAnimationsModule, HttpClientTestingModule ],
      providers: [ FeedService ]
    })
    .compileComponents();

    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // console.log(component.imageData$);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('', () =>{
     beforeEach(async(() => {

     }));

     it('has FeedService injected in constructor', () => {
        expect(component['feedService']).not.toBe(null);
     });

     it('has grid cols and gutter size initialised', () => {
        expect(component['grid'].cols).not.toBe(null);
        expect(component['grid'].gutterSize).not.toBe(null);
     });

     it('had image data in Observable to populate on component init', () => {
       component.imageData$.subscribe(
         images => {
           expect(images.length).toBeGreaterThan(0);
         }
       );
     });

     it('has MediaObserver with a returned Observable<>', () => {
       component['mediaObserver'].media$.subscribe( data => {
         expect(data).not.toBe(null);
       });
     })
  })
});
