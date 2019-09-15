import { Injectable } from '@angular/core';

@Injectable()
export class MockServiceService {

  constructor() { }

  displayTest() {
    console.log('test');
  }

}