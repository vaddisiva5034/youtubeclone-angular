import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-thumbline',
  templateUrl: './thumbline.component.html',
  styleUrls: ['./thumbline.component.scss'],
})
export class ThumblineComponent implements OnInit {
  @Input() video: any;
  constructor() {}

  ngOnInit(): void {}
}
