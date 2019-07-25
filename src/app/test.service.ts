import { Injectable } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable, } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }
  // getImage(imageUrl: string) {
  //   return this.http.get(imageUrl, { responseType: 'blob', observe: 'response' }).pipe(
  //     map(res => {
  //       return new Blob([res.url], { type: res.headers.get('Content-Type') });
  //     }));
  // }



  public getFile(path: string): Observable<Blob> {
    // let options = new HttpRequest({ responseType:'blob' });
    return this.http.get(path, { responseType: 'blob' }).pipe(
      map((response) => <Blob>(response)
      ))
  }
}