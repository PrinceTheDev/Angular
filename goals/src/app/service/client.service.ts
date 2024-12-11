import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/client';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients ():Observable<Client> {
    return this.http.get<Client>(environment.API_URL + "GetAllDesignation")
  }
  addUpdate (obj:Client):Observable<Client> {
    return this.http.post<Client>(environment.API_URL + "GetAllDesignation",obj)
  }
  deleteClientsById (id:number):Observable<Client> {
    return this.http.get<Client>(environment.API_URL + "DeleteClientByClientId?clientId="+id)
  }
}
