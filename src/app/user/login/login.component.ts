import { Component, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
     fireBaseAuth = inject(Auth)
  constructor(
    // private auth :AngularFireAuth
  ){}

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  onSubmit() {
    const password = this.form.get('password')?.value;
    const email = this.form.get('email')?.value;
    if(!password || !email) return;

    signInWithEmailAndPassword(this.fireBaseAuth , email , password).then(
      res=>{
        console.log(res);
        
      }
    )

  }

}
