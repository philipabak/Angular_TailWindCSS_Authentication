import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  submitted = false;
  form: any = {
    username: null,
  };

  errorMessage = '';

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router,
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      username: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    
    const { username } = this.form;
  }
}
