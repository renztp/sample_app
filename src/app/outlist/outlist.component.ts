import { Component, OnInit, Input } from '@angular/core';
import * as outlistData from './outlist';
import * as formData from '../form/form.component';

@Component({
  selector: 'app-outlist',
  templateUrl: './outlist.component.html',
  styleUrls: ['./outlist.component.css', '../../assets/iconF/css/font-awesome.css']
})
export class OutlistComponent implements OnInit {
  id: number;
  theFakeList = formData.fakeList;
  @Input() toPass;

  constructor() { }

  ngOnInit() {

  }

}



