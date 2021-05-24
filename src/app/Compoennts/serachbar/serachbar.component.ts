import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-serachbar',
  templateUrl: './serachbar.component.html',
  styleUrls: ['./serachbar.component.scss'],
})
export class SerachbarComponent implements OnInit {
  searchTerm = '';
  @Output() onSubmit = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  handleClick() {
    this.onSubmit.emit(this.searchTerm);
  }
}
