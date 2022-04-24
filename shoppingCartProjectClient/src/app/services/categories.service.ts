import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private httpClient: HttpClient) {}

  private httpAuthHeader(withAuth = false) {
    if (withAuth) {
      const token: any = localStorage.getItem('accessToken');
      const httpOptions: any = {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json; charset=UTF-8',
        }),
      };
      return httpOptions;
    } else {
      return {};
    }
  }

  add(data: any) {
    return this.httpClient.post(
      environment.categoryUrl + 'add',
      data,
      this.httpAuthHeader(true)
    );
  }
  getAll() {
    return this.httpClient.get(
      environment.categoryUrl + 'get-all',
      this.httpAuthHeader(true)
    );
  }
  get(id: number) {
    return this.httpClient.get(
      environment.categoryUrl + 'get?id=' + id,
      this.httpAuthHeader(true)
    );
  }
  delete(id: number) {
    return this.httpClient.delete(
      environment.categoryUrl + 'delete?id=' + id,
      this.httpAuthHeader(true)
    );
  }
  update() {}
}
