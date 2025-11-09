import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true, // 👈 importante
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'] // 👈 plural
  ,
  imports: [RouterLink]
})
export class Navbar {}
