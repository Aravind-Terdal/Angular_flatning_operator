import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsresReviewComponent } from './usres-review.component';

describe('UsresReviewComponent', () => {
  let component: UsresReviewComponent;
  let fixture: ComponentFixture<UsresReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsresReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsresReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
