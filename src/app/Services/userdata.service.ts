import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  user1()
  {
    return [
      { Name: 'Zahid', Age: 23, Email: 'Zahid@gmail.com' },
      { Name: 'Farman', Age: 24, Email: 'Farman@gmail.com' },
      { Name: 'Sadam', Age: 25, Email: 'Sadam@gmail.com' },
      
     ]
  }
}
