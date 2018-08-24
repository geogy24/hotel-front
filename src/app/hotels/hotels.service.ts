import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Hotel} from '../models/hotel';
import { IResponse } from '../interfaces/IResponse';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class HotelsService {

  private API_URL = 'http://localhost:3000';

  private hotelsSource = new BehaviorSubject<Hotel[]>([]);
  public currentHotels = this.hotelsSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  getHotel(id: string): Observable<IResponse> {
    return this.httpClient.get<IResponse>(`${this.API_URL}/hotels/${id}`);
  }

  getHotels(): void {
    this.httpClient.get<IResponse>(`${this.API_URL}/hotels`)
      .subscribe((response: IResponse) => {
        this.hotelsSource.next(response.data);
      });
  }

  removeHotel(id: string): Observable<IResponse> {
    return this.httpClient.delete<IResponse>(`${this.API_URL}/hotels/${id}`);
  }

  createHotel(form): Observable<IResponse> {
    return this.httpClient.post<IResponse>(`${this.API_URL}/hotels`, form);
  }

  updateHotel(id, form): Observable<IResponse> {
    return this.httpClient.put<IResponse>(`${this.API_URL}/hotels/${id}`, form);
  }

  filter(form): void{
    this.httpClient.post<IResponse>(`${this.API_URL}/hotels/find`, form)
      .subscribe((response: IResponse) => {
        this.hotelsSource.next(response.data);
      });
  }
}
