import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.scss'],
})
export class VideolistComponent implements OnInit {
  @Input() videos: any;
  @Output() onSelect = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSlectedVideo(video: any) {
    this.onSelect.emit(video);
  }
}
