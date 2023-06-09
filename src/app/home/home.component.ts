import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/Profile';
import { DatamanageService } from '../datamanage.service';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profile!: Profile;
  constructor(private service:DatamanageService){}
  data1:any
  html2pdf:any
  ngOnInit() {
    this.data1=JSON.parse(JSON.stringify(this.service.data))
    console.log(this.data1);
  }
done(){
 
    const element = document.getElementById('w');
    const options = {
      margin:       1,
      filename:     'cv-template.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { dpi: 192, letterRendering: true },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
  
    html2pdf().set(options).from(element).save();
  
  
}


}
