import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Trip } from 'models/Trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: Http) { }
  private BaseUrl = 'http://localhost:3000/api/';
  private tripsUrl = `${this.BaseUrl}trips/`;

  public getTrips(): Promise<Trip[]> {
    console.log("Inside TripDataService -> GetTrips");
    return this.http
      .get(this.tripsUrl)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error("Something went wrong", error);
    return Promise.reject(error.message || error);
  }

  public addTrip(formData: Trip): Promise<Trip> {
    console.log("Inside TripDataService -> AddTrip");
    return this.http
      .post(`${this.BaseUrl}trips`, formData)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError)
  }

  public getTrip(tripCode: string): Promise<Trip> {
    console.log("Inside TripDataService -> GetTrip");
    return this.http
      .get(this.tripsUrl + tripCode)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip> {
    console.log("Inside TripDataService -> UpdateTrip");
    return this.http
      .put(this.tripsUrl + formData.code, formData)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }
}
