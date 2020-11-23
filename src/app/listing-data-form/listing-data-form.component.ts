import { Listing } from './../types';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit {

  @Input() buttonText;

  @Input() currentName = '';
  @Input() currentDescription = '';
  @Input() currentPrice = '';

  name: string;
  description: string;
  price: string;

  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  // onSubmit(): void {
  //   alert(`Creating a new listing...`);
  //   this.router.navigateByUrl('/my-listings');
  // }
  onButtonClicked(): void {
    this.onSubmit.emit({
      id: null,
      name: this.name,
      description: this.description,
      price: Number(this.price)
    });
  }

}
