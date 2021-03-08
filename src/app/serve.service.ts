import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grammer } from './grammer_interface';
import { Mispell } from './mispell_interface';

@Injectable({
  providedIn: 'root'
})
export class ServeService {
  private url1:string='/assets/grammer.json';
  private url2:string='/assets/mispelled.json';


  getGrammerData():Observable<Grammer[]>{
  return this.http.get<Grammer[]>(this.url1);
  }
  getMispelledData():Observable<Mispell[]>{
    return this.http.get<Mispell[]>(this.url2);
    }
constructor( private http:HttpClient) { }

}
