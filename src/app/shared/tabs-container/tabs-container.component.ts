import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.css'
})
export class TabsContainerComponent implements OnInit, AfterContentInit {



  @ContentChildren(TabComponent) tabs:QueryList<TabComponent> = new QueryList<TabComponent> ();

  ngOnInit(): void {
   
  }

  ngAfterContentInit(): void {
    console.log(this.tabs);
  }
}
