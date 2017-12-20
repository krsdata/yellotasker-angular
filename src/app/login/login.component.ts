import { Component, Input , Output, EventEmitter } from '@angular/core';
import { User } from '../modal/user';
import { HttpService } from '../services/http.service';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [HttpService]
 })
export class LoginComponent {
  @Input()
  loaderIndicator: boolean;
  
  @Output()
  setLoader : EventEmitter<boolean> = new EventEmitter<boolean>();

  user =  new User('', '', '', '');
  submitted = false;
  
  constructor(private _httpService: HttpService) {
  }
  
  login(form : any, modal : any) {
    form._submitted = true; 
    if(form.valid)
      {
         //show Loader
          this.loaderIndicator = false;
          this.setLoader.emit(this.loaderIndicator);
          //http Request
          let loginOperation:Observable<User[]>;
          loginOperation  = this._httpService.loginUser(this.user);
          loginOperation.subscribe(
                                users => {
                                     //hide Loader
                                this.loaderIndicator = true;
                                this.setLoader.emit(this.loaderIndicator);
                                this.user = new User('','', '', '');
                                modal.hide();
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
      }
      else{
        
      }
  }
}