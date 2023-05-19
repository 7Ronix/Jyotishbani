import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './models/employee.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }
  login(data: any): Observable<any> {
    return this.http.post(`http://localhost:3000/login`, data);
  }
  signup(data: any): Observable<any> {
    return this.http.post(`http://localhost:3000/register`, data);

  }


  getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  postEmployee(employee: Employee) {
    return this.http.post<Employee>(this.baseUrl, employee);
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }



  // Astrologer
  postAstrologer(data: any) {
    return this.http.post<any>("http://localhost:3000/astrologer/register", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getAstrologer() {
    return this.http.get<any>("http://localhost:3000/astrologer/getAllAstrologer")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  updateAstrologer(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/astrologer/updateAstrologer/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  deleteAstrologer(id: number) {
    return this.http.delete<any>("http://localhost:3000/astrologer/deleteAstrologer/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getOne(id: number) {
    return this.http.get('http://localhost:3000/astrologer/getAstrologerById/' + id)
      .pipe(map((res: any) => {
        return res
      }))
  }

}
