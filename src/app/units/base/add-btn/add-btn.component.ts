import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'kf-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.scss']
})
export class AddBtnComponent implements OnInit {
  isActive = false;
  constructor() {
  }

  ngOnInit() {
  }

  toggleState() {
    this.isActive=!this.isActive

  }
}
