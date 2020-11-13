import { Listing } from './../types';
import { Component, OnInit } from '@angular/core';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit {
  Listings: Listing[] = [];

  constructor() { }

  ngOnInit(): void {
    this.Listings = fakeListings;
  }

}
