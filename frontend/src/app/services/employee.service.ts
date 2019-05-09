import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  readonly employeesApi = 'http://localhost:3000/api/employees';
  selectedEmployee: Employee;
  employees:Employee[];
  constructor(private http: HttpClient) {
    this.selectedEmployee=new Employee();
    this.employees=[];
  }
  getEmployees() {
    return this.http.get(this.employeesApi);
  }
  postEmployees(employee: Employee) {
    return this.http.post(this.employeesApi, employee);
  }
  putEmployees(employee: Employee) {
    return this.http.put(this.employeesApi + `/${employee._id}`, employee);
  }
  deleteEmployees(employee: Employee) {
    return this.http.delete(this.employeesApi + `/${employee._id}`);
  }
}
