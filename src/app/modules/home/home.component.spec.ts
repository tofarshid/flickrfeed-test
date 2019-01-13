import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MaterialModule } from '../../shared/material.module';
import { HomeComponent } from './home.component';
import { SearchComponent } from './search/search.component';
import { GridComponent } from './grid/grid.component';

import { FeedService } from '../../core/services/feed.service';

import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, SearchComponent, GridComponent ],
      imports: [ FormsModule, MaterialModule, BrowserAnimationsModule, HttpClientTestingModule ],
      providers: [  FeedService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
