import { Injectable } from '@angular/core';
import { enviroment } from '../../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators'; 

interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = enviroment.apiUrl;

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}/users?username=${username}&password=${password}`).pipe(
      map((users) => {
        if (users.length > 0) {
          const token = this.generateToken(users[0].username);
          localStorage.setItem('token', token);
          localStorage.setItem('roleType', users[0].roleType);
          return true;
        }
        return false;
      }),
      catchError(() => of(false))
    );
  }

  private generateToken(username: string) {
    return btoa(username);
  } 

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('roleType');
    this.router.navigate(['/login']);
  }

}
