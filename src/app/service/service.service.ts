import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  getLaboratory(): Observable<any> {
    return this.http.get<any>('https://weather-station203.herokuapp.com/api/sensor/value');
  }
}
