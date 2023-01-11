import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WixWebsiteComponent } from './wix-website.component';

describe('WixWebsiteComponent', () => {
  let component: WixWebsiteComponent;
  let fixture: ComponentFixture<WixWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WixWebsiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WixWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
