import {Http, RequestOptionsArgs, XHRBackend, Response, RequestOptions, ConnectionBackend, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


export class HttpProvider extends Http {

    // Http Interceptor for JWT

    constructor (connectionBackend: ConnectionBackend, requestOptions: RequestOptions) {
        super(connectionBackend, requestOptions);
    }

    get(url: string): Observable<Response> {

        return super.get(url, this.getRequestOptionArgs(url));
    }

    post(url: string, body: string): Observable<Response> {

        return super.post(url, body, this.getRequestOptionArgs());
    }

    put(url: string, body: string): Observable<Response> {
            return super.put(url, body, this.getRequestOptionArgs());
    }

    getRequestOptionArgs(url?: string) {

        const authToken = JSON.parse(localStorage.getItem('authToken'));
        if (authToken) {
            const headers = new Headers({ 'Authorization': 'Bearer ' + authToken });
            return new RequestOptions({ headers: headers });
        }
    }
}

export let httpFactory = (backend: XHRBackend, defaultOptions: RequestOptions) => {
    { return new HttpProvider(backend, defaultOptions); } };

