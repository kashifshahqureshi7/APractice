import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {
  url ="https://api.github.com/users?since=XXX"
  constructor(private http: HttpClient) { }
  API()
  {
    return this.http.get(this.url)
  }
}
