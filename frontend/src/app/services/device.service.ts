import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Device } from '../models/device';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  API:string = `${environment.API}devices`;

  constructor(private httpClient: HttpClient) { }

  findAll(){
    return this.httpClient.get<any>(this.API);
  }

  create(device:Device):Observable<Device>{
    return this.httpClient.post<Device>(this.API, device);
  }

  update(id:string, device:Device):Observable<Device>{
    return this.httpClient.put<Device>(`${this.API}/${id}`, device);
  }

  delete(id: number){
    return this.httpClient.delete(`${this.API}/${id}`);
  }

}
