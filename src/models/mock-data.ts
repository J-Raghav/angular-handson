import { Department } from "./department";
import { Employee } from "./employee";
import { Skill } from "./skill";

export let DEPARTMENTS: Department[] = [
  { id: 101, name: "Payroll" },
  { id: 102, name: "Internal" },
  { id: 103, name: "HR" }  
]

export let EMPLOYEES: Employee[] = [
  {
    id: 1,
    name: 'John',
    salary: 9999999,
    permanent: true,
    dateOfBirth: new Date('08/04/1999'),
    department: { id: 103, name: 'HR'},
    skills: [
      {
        id: 1001,
        name: 'dotnet'
      },
      {
        id: 1002,
        name: 'Python'
      },
      {
        id: 1003,
        name: 'Java'
      }
    ]
  },
  {
    id: 2,
    name: 'Ram',
    salary: 555555,
    permanent: true,
    dateOfBirth: new Date('05/03/1994'),
    department: { id: 102, name: 'Internal'},
    skills: [
      {
        id: 1002,
        name: 'Python'
      },
      {
        id: 1003,
        name: 'Java'
      } 
    ]
  },
  {
    id: 3,
    name: 'Ravi',
    salary: 5555555,
    permanent: false,
    dateOfBirth: new Date('09/03/1996'),
    department: { id: 102, name: 'Internal'},
    skills: [
      {
        id: 1001,
        name: 'dotnet'
      }
    ]
  },
  {
    id: 4,
    name: 'Nami',
    salary: 5555555,
    permanent: true,
    dateOfBirth: new Date('09/03/1996'),
    department: { id: 102, name: 'Internal'},
    skills: [
      {
        id: 1001,
        name: 'dotnet'
      }
    ]
  },
  {
    id: 5,
    name: 'James',
    salary: 59595959,
    permanent: true,
    dateOfBirth: new Date('09/03/1996'),
    department: { id: 102, name: 'Internal'},
    skills: [
      {
        id: 1001,
        name: 'dotnet'
      }
    ]
  }
]

