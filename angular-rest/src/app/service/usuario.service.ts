import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {

  }

  getUsuarioList(): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl);
  }

  getUsuario(id: String): Observable<any> {
    return this.http.get<any>(AppConstants.baseUrl + id);
  }

  deletarUsuario(id: Number): Observable<any> {
    return this.http.delete(AppConstants.baseUrl + id, { responseType: 'text' });
  }

  consultarUsuario(nome: String): Observable<any> {
    return this.http.get(AppConstants.baseUrl + "usuarioPorNome/" + nome);
    // http://localhost:8080/cursopringrestapi/usuario/usuarioPorNome/marcella
  }

  salvarUsuario(user): Observable<any> {
    return this.http.post<any>(AppConstants.baseUrl, user);
  }

  updateUsuario(user): Observable<any> {
    return this.http.put<any>(AppConstants.baseUrl, user);
  }

  userAutenticado() {
    if (localStorage.getItem('token') != null &&
      localStorage.getItem('token').toString().trim() != null) {
      return true;
    }else{
      return false;
    }
  }

}
