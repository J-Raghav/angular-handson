import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {

  employees: Employee[];
  filteredEmployees: Employee[];
  searchKey = '';
  constructor(empService: EmployeeService) {
    this.employees = empService.getAllEmployees();
    this.filteredEmployees = empService.getAllEmployees();

   }

  ngOnInit(): void {
  }

  search(){
    if (this.searchKey.trim()){
      this.filteredEmployees = this.employees.filter( emp => emp.name.toLowerCase().startsWith(this.searchKey.toLowerCase()))
    }
    else{
      this.filteredEmployees = this.employees;
    }
  }

}
