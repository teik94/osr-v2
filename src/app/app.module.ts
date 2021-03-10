import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TestGridComponent } from './test/test-grid/test-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { TestTabComponent } from './test/test-tab/test-tab.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
//import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TabComponent } from './test/tab/tab.component';
import { TabItemComponent } from './test/tab-item/tab-item.component';
import { TabBodyComponent } from './test/tab-body/tab-body.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestGridComponent,
    TestTabComponent,
    NavbarComponent,
    TabComponent,
    TabItemComponent,
    TabBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
