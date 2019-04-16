import { Component, NgModule, ViewChild, OnInit } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule
} from "@angular/forms";
import { NgSelectModule, NgOption } from "@ng-select/ng-select";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  selectedCity: any;

  cities = [
    { id: 1, name: "Vilnius" },
    { id: 2, name: "Kaunas" },
    { id: 3, name: "Pavilnys" },
    { id: 4, name: "Pabradė" },
    { id: 5, name: "Klaipėda" }
  ];
}
