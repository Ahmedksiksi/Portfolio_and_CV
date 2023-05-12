import { Component, OnInit } from '@angular/core';
import { DatamanageService } from '../datamanage.service';
import { Profile } from '../models/Profile';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  constructor(private service:DatamanageService){}
  profile!: Profile;

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
