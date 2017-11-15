import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const aList = [

    {id: 1, title: 'Harry Potter', author: 'Jk Rowling'},
    {id: 1, title: 'Harry Potter', author: 'Jk Rowling'},
    {id: 1, title: 'Harry Potter', author: 'Jk Rowling'},
    {id: 1, title: 'Harry Potter', author: 'Jk Rowling'},
    {id: 1, title: 'Harry Potter', author: 'Jk Rowling'},
    ];
    return {aList};
  }
}
