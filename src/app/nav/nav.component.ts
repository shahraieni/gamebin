import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
constructor( private modal:ModalService , public auth:AuthService , private afAuth:AngularFireAuth){}


  openModal(){
    
      this.modal.toggleModal();
  }

    logOut(event :Event){
       this.auth.logOut(event)
  }
}
