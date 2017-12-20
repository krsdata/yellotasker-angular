import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

loaderIndicator: boolean;

setLoader(loaderIndicator: boolean) {
    this.loaderIndicator = loaderIndicator;
}

}