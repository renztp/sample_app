import { Component, OnInit } from '@angular/core';
import * as outlistData from '../outlist/outlist.component';
import { Title } from '@angular/platform-browser/src/browser/title';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  author: string;
  title: string;
  owner: string;

  constructor() { }

  ngOnInit() {
  }

}


export function adds(theId, theTitle, theAuthor) {
    fakeList.push({id: theId, title: theTitle, author: theAuthor});
}

export let fakeList = [
    {id: 1, title: 'Harry Potter', author: 'Jk Rowling'},
    {id: 2, title: 'Harry Potter', author: 'Jk Rowling'},
    {id: 3, title: 'Harry Potter', author: 'Jk Rowling'},
    {id: 4, title: 'Harry Potter', author: 'Jk Rowling'},
    {id: 5, title: 'Harry Potter', author: 'Jk Rowling'},
];
