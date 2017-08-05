import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashBoardComponent } from './dashboard/dashboard.component'
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: 'dashboard', component: DashBoardComponent },
   { path: '', component: DashBoardComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
