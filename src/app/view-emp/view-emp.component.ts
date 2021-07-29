import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/models/employee';
import { EMPLOYEES } from 'src/models/mock-data';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {
  employee: Employee;

  constructor(empService: EmployeeService) { 
    this.employee = empService.getAllEmployees()[0]
  }

  ngOnInit(): void {
  }

}
