import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

// add
import { MaterialModule } from './shared/material.module';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';


describe('AppComponent', () => {
  let contentLayoutComponent: ContentLayoutComponent;
  let contentLayoutFixture: ComponentFixture<ContentLayoutComponent>;

  let de: DebugElement;
  let elm: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule
      ],
      declarations: [
        AppComponent,
        ContentLayoutComponent,
        HeaderComponent,
        FooterComponent
      ],
    }).compileComponents();

    contentLayoutFixture = TestBed.createComponent(ContentLayoutComponent);
    contentLayoutComponent = contentLayoutFixture.componentInstance;

    

  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a master-container class', () =>{
    de = contentLayoutFixture.debugElement.query(By.css('.master-container'));
    expect(de).toBeTruthy();
  });

});
