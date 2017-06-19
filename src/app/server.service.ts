import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class ServerService {
    constructor(private http: Http) { }
    storeServers(servers: any[]) {
        return this.http.post('https://udemy-ng4-http-3f6dd.firebaseio.com/data.json', servers);
    }
}
