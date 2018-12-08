import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LigthServiceService {
  private url = "http://192.168.1.74:8080/home/api/ligth";
  
  constructor(private http: HttpClient) { }

  turnOn(): Observable<any> {
    console.log("Botão");
    let formData: FormData = new FormData(); 
    return this.http.post(this.url, formData);
  }
}


