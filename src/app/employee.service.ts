import { Injectable } from '@angular/core';
import { Employee } from 'src/models/employee';
import { EMPLOYEES } from 'src/models/mock-data';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList: Employee[] = EMPLOYEES

  constructor() { }

  getAllEmployees(){
    return this.employeeList;
  }

  getEmployee(empId: number){
    return this.employeeList.find(emp => emp.id === empId) ;
  }
}
