import { Component, Input , Output, EventEmitter } from '@angular/core';
import { User } from '../modal/user';
import { HttpService } from '../services/http.service';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  providers: [HttpService]
 })
export class SignUpComponent {
  @Input()
  loaderIndicator: boolean;
  
  @Output()
  setLoader : EventEmitter<boolean> = new EventEmitter<boolean>();

  user =  new User('', '', '', '');
  submitted = false;
  
  constructor(private _httpService: HttpService) {
  }

  signUp(form : any, modal : any) {
   
    form._submitted = true; 
    if(form.valid)
      {
         //show Loader
          this.loaderIndicator = false;
          this.setLoader.emit(this.loaderIndicator);
          //http Request.
          let signupOperation:Observable<User[]>;
          console.log(this.user);
          signupOperation  = this._httpService.signUpUser(this.user);
          console.log("response" + signupOperation);
          signupOperation.subscribe(
                                users => {
                                      // Empty model
                                      this.user = new User('', '', '', '');
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
          });
          //hide Loader
          this.loaderIndicator = true;
          this.setLoader.emit(this.loaderIndicator);
          this.user = new User('','', '', '');
          modal.hide();
      }
      else{
        
      }
  }
}