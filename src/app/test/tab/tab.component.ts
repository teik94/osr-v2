import { AfterContentChecked, AfterContentInit, Component, ComponentRef, ContentChildren, OnInit, QueryList } from '@angular/core';
import { Observable, Subscription } from "rxjs";
import { startWith, map, take, tap, delay } from "rxjs/operators";
import { TabItemComponent } from '../tab-item/tab-item.component';
@Component({
  selector: 'app-tab',
  template: `<div class="nav-tabs-navigation" data-tabs-color="orange">
                <div class="tabs-header">
                  <div class="tab-label"
                      (click)="selectTab(item)"
                      [class.active]="activeTab === item"
                      *ngFor="let item of tabItems$ | async">
                      <ng-container *ngIf="item.title">
                        {{ item.title }}
                      </ng-container>
                  </div>
                </div>

                <div class="tabs-body">
                    <ng-container *ngIf="activeTab && activeTab.bodyComponent">
                      <ng-container *ngTemplateOutlet="activeTab.bodyComponent.bodyContent">
                      </ng-container>
                    </ng-container>
                  </div>
              </div>`,
  styleUrls: ['./tab.component.scss']
})
export class TabComponent  implements AfterContentInit, AfterContentChecked {
  @ContentChildren(TabItemComponent)
  tabs: QueryList<TabItemComponent>;

  tabItems$: Observable<TabItemComponent[]>;

  activeTab: TabItemComponent;
  componentRef: ComponentRef<any>;

  constructor() { }

  ngAfterContentInit(): void {
    
    this.tabItems$ = this.tabs.changes
      .pipe(startWith(""))
      .pipe(delay(0))
      .pipe(map(() => this.tabs.toArray()));
  }

  ngAfterContentChecked() {
    //choose the default tab
    // we need to wait for a next VM turn,
    // because Tab item content, will not be initialized yet
    if (!this.activeTab) {
      Promise.resolve().then(() => {
        this.activeTab = this.tabs.first;
      });
    }
  }

  selectTab(tabItem: TabItemComponent) {
    if (this.activeTab === tabItem) {
      return;
    }

    if (this.activeTab) {
      this.activeTab.isActive = false;
    }

    this.activeTab = tabItem;

    tabItem.isActive = true;
  }

}
