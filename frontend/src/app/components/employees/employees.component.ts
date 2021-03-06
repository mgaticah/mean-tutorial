import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
declare var M: any;
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.getEmployees();
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset;
    }
    this.employeeService.selectedEmployee = new Employee();
  }
  addEmployee(form: NgForm) {
    this.employeeService.postEmployees(form.value).subscribe(result => {
      this.resetForm(form);
      M.toast({ html: 'Empleado grabado' });
      this.getEmployees();
    });
  }
  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      res => {
        this.employeeService.employees = res as Employee[];
      }
    );
  }
}
