import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TripDataService } from 'services/trip-data.service';
import { Trip } from 'models/Trip';
@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {
  editForm: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private tripService: TripDataService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    let tripCode = localStorage.getItem('tripCode');
    if (!tripCode) {
      alert('Something went wrong.');
      this.router.navigate(['']);
      return;
    }
    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    })
    this.tripService.getTrip(tripCode)
      .then(data => {
        console.log(data);
        this.editForm.patchValue(data);
      })
  }

  onSubmit() {
    this.submitted = true;
    if(this.editForm.valid) {
      this.tripService.updateTrip(this.editForm.value)
      .then( data => {
        console.log(data);
        this.router.navigate(['']);  
      });
    }
  }
  get f() { return this.editForm.controls; }


}
