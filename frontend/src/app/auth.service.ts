import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5037/api/v1/users';

  constructor(private http: HttpClient) {}

  login(username: string, password: string, role: string): Observable<any> {
    return this.http.post(`${this.apiUrl}`, { pseudo: username, password, role });
  }

  // Ne pas oublier { withCredentials: true }
  isConnected(): Observable<any> {
    return this.http.get(`${this.apiUrl}/IsConnected`, { withCredentials: true });
  }

  testConnectionByRole(): Observable<any> {
    return this.http.get(`${this.apiUrl}`, { withCredentials: true });
  }
}
