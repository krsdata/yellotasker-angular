import { Injectable } from '@angular/core';
import { User } from '../modal/user';
import { Http, Response , Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {
    // Inject Angular http service
    constructor(private _http: Http) { }
    
    private yellotasker_Api_URL = 'http://api.yellotasker.co/';
    
    //sign up user
    signUpUser(user : Object) : Observable<User[]>  {
        //let bodyString = JSON.stringify(user); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(this.yellotasker_Api_URL + 'api/v1/user/signup', JSON.stringify(user), options)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                    console.log('error within catch is ' + Response)
                    if(error.status === 404)
                        return Observable.throw('not found error');

                    return Observable.throw('app error');
                    });
                }
    //login user
    loginUser(user : User) : Observable<User[]>  {
        //let bodyString = JSON.stringify(user); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
        
        // Parameters obj-
        let params: URLSearchParams = new URLSearchParams();
        params.set('email',  user.email);
        params.set('password', user.password);

        options.params = params;
        return this._http.get(this.yellotasker_Api_URL + 'api/v1/user/login', options)
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                    console.log('error within catch is ' + Response)
                    if(error.status === 404)
                        return Observable.throw('not found error');

                    return Observable.throw('app error');
                    });
                }
}
