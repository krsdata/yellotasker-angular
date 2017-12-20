import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashBoardComponent } from './dashboard/dashboard.component'
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ModalComponent} from './modal.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';

const appRoutes: Routes = [
   { path: 'dashboard', component: DashBoardComponent },
   { path: '', component: DashBoardComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    ModalComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
