import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

// All endpoints that API supports
export const PEOPLE = 'people';
export const FILMS = 'films';
export const STARSHIPS = 'starships';
export const VEHICLES = 'vehicles';
export const SPECIES = 'species';
export const PLANETS = 'planets';

// Interface mapped from API
export interface Response {
  count: Number;
  next: string;
  previous: string;
  result: any;
}

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  // The Star Wars root URL
  private readonly API_BASE_URL = 'https://swapi.co/api/';

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param {string} endpoint 
   */
  get(endpoint: String): Observable<Response> {
    return this.http.get<Response>(`${this.API_BASE_URL}${endpoint}`).pipe(
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
