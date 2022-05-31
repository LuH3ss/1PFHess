import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {

  ingreso:boolean;
  formIngreso: FormGroup;
  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.formIngreso = this.fb.group({
      email:['', '', [Validators.required, Validators.maxLength(30)]],
      persona:['', Validators.required],
      password:['', [Validators.required, Validators.minLength(8), Validators.maxLength(25) ]],
    })
  }


  onSubmit() {
    
  }
}
