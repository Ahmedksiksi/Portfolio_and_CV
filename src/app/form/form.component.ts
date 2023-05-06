import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  profile = {
    name:'',
    lastname:'',
    tel:0,
    mail:'',
    adress:'',
    age: 0,
    education:'',
    experience:'',
    Skills:'',
    about:'',
    language:'',
    work:''
  }
  profiles: any;

  constructor(private dataService:DataServiceService){}
  
  ngOnInit(): void {
   
      // this.dataService.all().subscribe({
      //   next:(res)=>{
      //     this.profiles=res;
      //     console.log(res);
      //   },
      //   error:(err)=>{
      //     console.log(err)
      //   }
      // })
    
  }


  myForm=new FormGroup({
    name:new FormControl(),
    lastname:new FormControl(),

    tel:new FormControl(),

    mail:new FormControl(),

    adress:new FormControl(),

    age:new FormControl(),
    language:new FormControl(),

    education:new FormControl(),
    experience:new FormControl(),
    skills:new FormControl(),
    about:new FormControl(),
    work:new FormControl(),

  })
  sendData(){
    let profile = {
      name:this.myForm.value.name,
      lastname:this.myForm.value.lastname,
      tel: this.myForm.value.tel,
      mail: this.myForm.value.mail,
      adress: this.myForm.value.adress,
       age: this.myForm.value.age,
       work: this.myForm.value.work

       
     }
 
     let formData=new  FormData();
     formData.append("name" ,this.myForm.value.name)
    formData.append("lastname" ,this.myForm.value.lastname)
    formData.append("tel" ,this.myForm.value.tel)
     formData.append("mail" ,this.myForm.value.mail)
     formData.append("adress" ,this.myForm.value.adress)
    formData.append("age" ,this.myForm.value.age)
    formData.append("work" ,this.myForm.value.work)

 console.log(profile);
  
 }
}
