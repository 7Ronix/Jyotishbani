import { Injectable } from '@angular/core';
import { AstrologerModel, Employee } from './app/models/employee.model';
import { UserModel } from './app/models/employee.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  updateAstrologer(astrologerModelObj: AstrologerModel, id: number) {
    throw new Error('Method not implemented.');
  }
  deleteAstrologer(id: any) {
    throw new Error('Method not implemented.');
  }
  getAstrologer() {
    throw new Error('Method not implemented.');
  }
  postAstrologer(astrologerModelObj: AstrologerModel) {
    throw new Error('Method not implemented.');
  }
  // deleteEmployee(event: any) {
  //   throw new Error('Method not implemented.');
  // }
  // postEmployee(employee: Employee) {
  //   throw new Error('Method not implemented.');
  // }
  // deleteEmployees(event: any) {
  //   throw new Error('Method not implemented.');
  // }
  // postEmployees(employee: Employee) {
  //   throw new Error('Method not implemented.');
  // }
  // getEmployees() {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http: HttpClient) { }

  postUser(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getUser() {
    return this.http.get<any>("http://localhost:3000/posts")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  updateUser(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/posts/" + id, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  deleteUser(id: number) {
    return this.http.delete<any>("http://localhost:3000/posts/" + id)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getOne(id: number) {
    return this.http.get('http://localhost:3000/posts/' + id)
      .pipe(map((res: any) => {
        return res
      }))
  }
}
