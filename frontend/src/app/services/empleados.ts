import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  
   private api = 'http://localhost:3001/empleados';
    constructor(private http: HttpClient) {}

  crearEmpleado(data: any): Observable<any> {
    return this.http.post(`${this.api}/crear`, data);
  }

  mostrarEmpleados(): Observable<any> {
    return this.http.get(`${this.api}/mostrar`);
  }

  actualizarEmpleado(id: string, data: any): Observable<any> {
    return this.http.put(`${this.api}/${id}`, data);
  }

  borrarEmpleado(id: string): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }

}
