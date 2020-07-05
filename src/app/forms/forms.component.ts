import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
    userForm:FormGroup;
    userDetails = [];
 
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      'name': this.fb.control('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      'email': this.fb.control('', [Validators.required,Validators.email]),
      'dob': this.fb.control(''),
      'country': this.fb.control('IN'),
      'gender': this.fb.control('', Validators.required),
      'status': this.fb.control('',Validators.required),
      'address': this.fb.array([
        this.fb.group({
          'street': this.fb.control('', [Validators.required]),
          'door': this.fb.control('',[Validators.required]),
          'zipcode': this.fb.control('',[Validators.required,Validators.pattern('[0-9]{5}')])
        })
      ])
    })

    console.log(this.userForm)

  }
      
  submitForm(){
       console.log(this.userForm.value);
       this.userDetails.push(this.userForm.value)
       console.log(this.userDetails)
   }
  deleterows(i:number)
  {
    console.log(this.userDetails[i]);
  }

  user={name:"Mark"};
  ngOnInit() {
  }
    
}
