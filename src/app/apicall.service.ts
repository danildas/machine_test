import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { Observable} from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor( private http:HttpClient) { }

  postData(){
    //this.http.post('baseUrl');
  }
}

