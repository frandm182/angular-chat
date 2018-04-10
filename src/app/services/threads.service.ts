import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { AllUserData } from '../../../shared/to/all-user-data';
// tslint:disable-next-line:import-blacklist
import 'rxjs/add/operator/map';

@Injectable()
export class ThreadsService {

  constructor(private http: Http) { }

  loadUserThreads(): Observable<AllUserData> {
    return this.http.get('/api/threads')
      .map(res => {
        console.log(res);
        return res.json();
      });
  }

}
