import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/models/employee';
import { EMPLOYEES } from 'src/models/mock-data';

@Component({
  selector: 'app-info-emp',
  templateUrl: './info-emp.component.html',
  styleUrls: ['./info-emp.component.css']
})
export class InfoEmpComponent implements OnInit {
  @Input() employee: Employee | null = null;
  constructor() {}

  ngOnInit(): void {
  }

}
