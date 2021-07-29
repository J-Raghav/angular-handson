import { Component, OnInit } from '@angular/core';
import { Department } from 'src/models/department';
import { Employee } from 'src/models/employee';
import { DEPARTMENTS } from 'src/models/mock-data';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-emp-template-driven',
  templateUrl: './edit-emp-template-driven.component.html',
  styleUrls: ['./edit-emp-template-driven.component.css']
})
export class EditEmpTemplateDrivenComponent implements OnInit {
  
  TRUE = true;
  FALSE = false;

  employee: Employee;
  departments: Department[] = DEPARTMENTS;

  constructor(empService: EmployeeService) { 
    this.employee = empService.getAllEmployees()[0];
  }

  ngOnInit(): void {
  }

  changeDept(event: any){
    this.employee.department.id = parseInt(event.target.value);
  }

  onSubmit(empForm: any){
    console.log(empForm.value);
  }
}
