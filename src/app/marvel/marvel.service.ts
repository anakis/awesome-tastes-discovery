import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

// All endpoints that API supports
export const ENDPOINTS = {
  CHARACTERS: 'characters',
  COMICS: 'comics',
  CREATORS: 'creators',
  EVENTS: 'events',
  SERIES: 'series',
  STORIES: 'stories'

}

// Interface mapped from API
export interface Response {
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  // The Marvel root URL
  private readonly API_BASE_URL = 'https://gateway.marvel.com/v1/public/';
  
  // My Marvel API key
  private readonly API_KEY = 'c1048890e2d31a79345d18064a8ee43f';

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param {string} endpoint 
   */
  get(endpoint: String): Observable<Response> {
    return this.http.get<Response>(`${this.API_BASE_URL}${endpoint}`, {
      params: {
        apikey: this.API_KEY
      }
    }).pipe(
      tap((res: Response) => this.handleResponse(res)),
      catchError(this.handleError<any>(endpoint))
    );
  }

  /**
   * Used for handle the response from get
   * @param {Response} response 
   */
  private handleResponse(response: Response): any {
    return response;
  }

  /**
   * Used for handle error from get
   * @param {any} error 
   */
  private handleError<T>(error: any): any {
   return error;
  }

}
