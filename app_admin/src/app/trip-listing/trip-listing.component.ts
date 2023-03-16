import { Component, OnInit } from '@angular/core';
// import {trips} from "../../data/trips";
import { TripDataService } from 'services/trip-data.service';
import { Trip } from 'models/Trip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {
  trips: Trip[] ;
  message: string;
  
  constructor(private tripDataService: TripDataService, private router: Router) { }
  private addTrip(): void {
    this.router.navigate(['add-trip']);
  }
  private getTrips(): void {
    console.log("Inside trip listing");
    this.message = "Searching for trips";
    this.tripDataService.getTrips().then( trips => {
      this.message = trips.length > 0 ? '' : "No trips found.";
      this.trips = trips;
    })
  }

  ngOnInit() {
    this.getTrips();
  }
  

}
