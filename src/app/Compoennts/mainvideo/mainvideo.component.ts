import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainvideo',
  templateUrl: './mainvideo.component.html',
  styleUrls: ['./mainvideo.component.scss'],
})
export class MainvideoComponent implements OnInit {
  @Input() video: any;

  constructor() {}

  ngOnInit(): void {}
}
