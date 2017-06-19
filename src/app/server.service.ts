import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'

@Injectable()
export class ServerService {
    constructor(private http: Http) { }
    storeServers(servers: any[]) {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        // return this.http.post('https://udemy-ng4-http-3f6dd.firebaseio.com/data.json', servers, { headers: headers });
        return this.http.put('https://udemy-ng4-http-3f6dd.firebaseio.com/data.json', servers, { headers: headers });
    }

    getServers() {
        return this.http.get('https://udemy-ng4-http-3f6dd.firebaseio.com/data.json');
    }
}
