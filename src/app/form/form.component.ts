import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder, FormControl } from '@angular/forms';
import { DataServiceService } from '../data-service.service';
import { ApiService } from '../api.service';
import { DatamanageService } from '../datamanage.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  imgpath:any = ""

  form2:FormGroup;
  form3:FormGroup;
  form4:FormGroup;
  constructor(private dataService:DataServiceService,private formBuilder:FormBuilder,private service:DatamanageService,private route:Router){
    this.form2 = this.formBuilder.group({
      skillsArray: this.formBuilder.array([
        this.formBuilder.group({
          skills: ['', Validators.required],
          level: ['', Validators.required]
        })
      ])
    });

    this.form3 = this.formBuilder.group({
      professionel: this.formBuilder.array([
        this.formBuilder.group({
    title: ['', Validators.required],
    dated: ['', Validators.required],
    datef: ['', Validators.required],
    description: ['', Validators.required]
        })
      ])
    });
    this.form4 = this.formBuilder.group({
      Education: this.formBuilder.array([
        this.formBuilder.group({
    title: ['', Validators.required],
    dated: ['', Validators.required],
    datef: ['', Validators.required],
    description: ['', Validators.required]
        })
      ])
    });
  }
  get skillsArray() {
    return this.form2.get('skillsArray') as FormArray;
  }
  
  
  
  addSkill() {
    this.skillsArray.push(this.formBuilder.group({
      skills: ['', Validators.required],
      level: ['', Validators.required]
    }));
  }
  
  removeSkill(index: number) {
    this.skillsArray.removeAt(index);
  }
  
  onSubmit2() {
    
  
    console.log(this.form2.value);
  }
  


data:any=""

myForm=new FormGroup({
    firstname:new FormControl(),
    lastname:new FormControl(),
    tel:new FormControl(),
    mail:new FormControl(),
    adr:new FormControl(),
    age:new FormControl(),
    about:new FormControl(),
    work:new FormControl(),
    image:new FormControl()
})

sendData(){
this.data={fistname:this.myForm.value.firstname,lastname:this.myForm.value.lastname,email:this.myForm.value.mail,phone:this.myForm.value.tel,adr:this.myForm.value.adr,age:this.myForm.value.age,about:this.myForm.value.about,work:this.myForm.value.work,image:this.imgpath}
console.log(this.data);
this.service.data.data = this.data
this.service.data.skils= this.form2.value.skillsArray
this.service.data.education=this.form4.value.Education
this.service.data.experience=this.form3.value.professionel
this.route.navigate(['/portfolio'])
}

valid() {
  console.log(this.myForm.value);
 

}


  eventhand(event :any){
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.imgpath = URL.createObjectURL(file);
      console.log(this.imgpath); 
    }
  }


  get professionel() {
    return this.form3.get('professionel') as FormArray;
  }
  
  addexp() {
    this.professionel.push(this.formBuilder.group({
      title: ['', Validators.required],
      dated: ['', Validators.required],
      datef: ['', Validators.required],
      description: ['', Validators.required]
  
    }));
  }
  
  removeexp(index: number) {
    this.professionel.removeAt(index);
  }
  onSubmit3() {

    console.log(this.form3.value);
  }
  get Education() {
    return this.form4.get('Education') as FormArray;
  }
  
  addEducation() {
    this.Education.push(this.formBuilder.group({
      title: ['', Validators.required],
      dated: ['', Validators.required],
      datef: ['', Validators.required],
      description: ['', Validators.required]
  
    }));
  }
  
  removeEducation(index: number) {
    this.Education.removeAt(index);
  }
  
  onSubmit4() {
  
  
    console.log(this.form4.value);
  }
}