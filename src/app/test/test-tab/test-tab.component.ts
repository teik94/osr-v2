import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ContentChild, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TestGridComponent } from '../test-grid/test-grid.component';

@Component({
  selector: 'app-test-tab',
  // templateUrl: './test-tab.component.html',
  template: `
  <app-tab>
    <app-tab-item>
      <app-tab-body>
      </app-tab-body>
    </app-tab-item>
  </app-tab>
    
    <button type="button" class="btn btn-primary" (click)="addTab()">Add Tab</button>
  `,
  styleUrls: ['./test-tab.component.scss']
})
export class TestTabComponent implements OnInit {
  @ContentChild(TabComponent)
  tabComponent: TabComponent;

  @ViewChild("myContainer", { read: ViewContainerRef }) container;
  constructor(private resolver: ComponentFactoryResolver) { }
  componentRef: ComponentRef<any>;

  listComponent = [];

  ngOnInit(): void {
  }

  addTab()
  {
    //alert("Test");
    // this.container.clear(); 
    // const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(TestGridComponent);
    // this.container.createComponent(factory);
    this.listComponent.push(TestGridComponent)
  }
}
