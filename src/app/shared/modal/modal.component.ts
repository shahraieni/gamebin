import { Component, ElementRef } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  constructor(public modal:ModalService , private elementRef:ElementRef){}
  ngOnInit(){
    document.body.appendChild(this.elementRef.nativeElement);
  }
  onCloseModal(){
    this.modal.toggleModal();
  }
}
