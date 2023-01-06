import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifiactionComponent } from './qualifiaction.component';

describe('QualifiactionComponent', () => {
  let component: QualifiactionComponent;
  let fixture: ComponentFixture<QualifiactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualifiactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualifiactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
