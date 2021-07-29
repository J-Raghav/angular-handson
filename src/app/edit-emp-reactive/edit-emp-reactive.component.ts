import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/models/department';
import { Employee } from 'src/models/employee';
import { DEPARTMENTS } from 'src/models/mock-data';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent implements OnInit {

  employee: Employee;
  departments: Department[] = DEPARTMENTS;
  TRUE: boolean = true;
  FALSE: boolean = false; 
  empForm = new FormGroup({});

  constructor(private route: ActivatedRoute, empService: EmployeeService) { 
    let empId = Number(this.route.snapshot.paramMap.get('id'));
    let emp = empService.getEmployee(empId) || empService.getAllEmployees()[0];

    this.employee = emp;  
    this.empForm = new FormGroup({

      name: new FormControl(this.employee.name, [
      
      Validators.required,
      
      Validators.minLength(4),
      
      Validators.maxLength(20)
      
      ]),
  
      salary: new FormControl(this.employee.salary, [Validators.required]),
      
      permanent: new FormControl(this.employee.permanent, [Validators.required]),
      
      dateOfBirth: new FormControl( this.employee.dateOfBirth, Validators.required),
      
      department: new FormControl( this.employee.department )
      });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.empForm.value);
  }

  changeDept(event: any){
    let deptId = parseInt(event.target.value);
    let dept = this.departments.find(i => i.id === deptId);
    this.employee.department.id = deptId;
    this.employee.department.name = dept?.name || '';
  }

  get name(){
    return this.empForm.get('name');
  }

  get salary(){
    return this.empForm.get('salary');
  }

  get permanent(){
    return this.empForm.get('permanent');
  }

}
