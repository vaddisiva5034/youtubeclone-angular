import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumblineComponent } from './thumbline.component';

describe('ThumblineComponent', () => {
  let component: ThumblineComponent;
  let fixture: ComponentFixture<ThumblineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumblineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumblineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
