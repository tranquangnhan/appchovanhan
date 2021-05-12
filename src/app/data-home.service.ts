import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataHomeService {
  private url = "http://localhost/apiappchovanhan/?act=";
  constructor(private http: HttpClient) { }
  getDataHome()
  {
    return this.http.get(this.url+'home');
  }
}
