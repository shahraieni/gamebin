import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../shared/input/input.component';
import { Auth, createUserWithEmailAndPassword  } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../models/user-model';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule , NgIf , InputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    authService = inject(AuthService)


  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(11)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

   get name() {
    return this.form.get('name');
   }

  onSubmit() {

    this.authService.createUser(this.form.value as IUser)
  
  }

}
