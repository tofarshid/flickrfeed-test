import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ContentLayoutComponent } from './content-layout.component';
import { MaterialModule } from '../../shared/material.module';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

describe('ContentLayoutComponent', () => {
  let component: ContentLayoutComponent;
  let fixture: ComponentFixture<ContentLayoutComponent>;

  // let headerComponent: HeaderComponent;
  // let headerComponentFixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ContentLayoutComponent, 
        HeaderComponent, 
        FooterComponent 
      ],
      imports: [
        RouterTestingModule, MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // headerComponentFixture = TestBed.createComponent(HeaderComponent);
    // headerComponent = headerComponentFixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
