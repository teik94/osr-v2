import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { TabBodyComponent } from '../tab-body/tab-body.component';

@Component({
  selector: 'app-tab-item',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent implements OnInit {
  title: string = "TEST";

  @Input()
  isActive: boolean;

  @ContentChild(TabBodyComponent)
  bodyComponent: TabBodyComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
