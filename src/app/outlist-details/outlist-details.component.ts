import { Component, OnInit } from '@angular/core';
import * as listData from '../form/form.component';

@Component({
  selector: 'app-outlist-details',
  templateUrl: './outlist-details.component.html',
  styleUrls: ['./outlist-details.component.css']
})
export class OutlistDetailsComponent implements OnInit {

  listInfo = listData.fakeList;

  constructor() { }

  ngOnInit() {
  }
}