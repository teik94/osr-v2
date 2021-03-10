import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
// import { LoginComponent } from './login/login.component';
import { TestGridComponent } from './test/test-grid/test-grid.component';
import { TestTabComponent } from './test/test-tab/test-tab.component';
import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes = [
  { path: 'test-grid', component: TestGridComponent },
  { path: 'test-tab', component: TestTabComponent },
  { path: 'index', component: ComponentsComponent },
  { path: 'nucleoicons', component: NucleoiconsComponent },
  { path: 'examples/landing', component: LandingComponent },
  { path: 'examples/login', component: LoginComponent },
  { path: 'examples/profile', component: ProfileComponent },
  { path: '', redirectTo: '/test-tab', pathMatch: 'full' }, // redirect to first component
];
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
