import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/Profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profile!: Profile;

  ngOnInit() {
    this.profile = new Profile('ehs','sdghdsgh',0,'hdfshfd','dfhdhfs',1,'dfshfdhs','gjhkjhgk','rty','rt','rt')
  }
}
