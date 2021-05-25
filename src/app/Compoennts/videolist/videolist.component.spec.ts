import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideolistComponent } from './videolist.component';

describe('VideolistComponent', () => {
  let component: VideolistComponent;
  let fixture: ComponentFixture<VideolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideolistComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create 2', () => {
    const app = fixture.debugElement.nativeElement;
    const length = app.querySelectorAll('app-thumbline').length;
    expect(component).toBeTruthy();
  });
});
