import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-clip',
  standalone: true,
  imports: [],
  templateUrl: './clip.component.html',
  styleUrl: './clip.component.css'
})
export class ClipComponent  implements OnInit {
  id ="";


  constructor(private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.params.subscribe((param:Params)=>{
      this.id = param['id']
    })
  }

}
