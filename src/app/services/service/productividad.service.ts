import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductividadService {

  apiUrl: string;
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  status: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://demo.medinet.cl/api/dashboard/productividad/?format=json';
  }
  async productividad() {
    try {
      return await this.http.get(
        this.apiUrl, { headers: this.headers }
      ).toPromise();
    } catch (error) {
      let resultado =
      {
        'status': false,
        'data': 'error al ejeceutar petición',
        'codeStatus': error.status
      };
      return resultado;
    }
  }
}
