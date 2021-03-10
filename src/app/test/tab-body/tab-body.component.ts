import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab-body',
  template: `<ng-template ngbTabContent><ng-content></ng-content></ng-template>`,
  styleUrls: ['./tab-body.component.scss']
})
export class TabBodyComponent implements OnInit {
  @ViewChild(TemplateRef)
  bodyContent: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
