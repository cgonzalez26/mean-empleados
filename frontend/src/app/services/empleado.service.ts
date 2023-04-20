import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  selectedEmpleado: Empleado;
  readonly URI_API = 'http://localhost:3000/api/Empleados';
  empleados: Empleado[];
  
  constructor(private http: HttpClient) { 
    this.empleados = [];
    this.selectedEmpleado = new Empleado();
  }
  
  //Definir metodos que pueden ser usados en cualquier parte de la App

  getEmpleados() {
    return this.http.get(this.URI_API);
  }

  addEmpleado(empleado: Empleado) {
    return this.http.post(this.URI_API, empleado);
  }

  updateEmpleado(empleado: Empleado) {
    return this.http.put(this.URI_API + `/${empleado._id}`, empleado);
  }

  deleteEmpleado(id: String){
    return this.http.delete(this.URI_API + `/${id}`);
  }
}
