import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [SharedModule , LoginComponent,RegisterComponent],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css'
})
export class AuthModalComponent {

}
