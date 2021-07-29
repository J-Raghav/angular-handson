import { Department } from './department'
import { Skill } from './skill'

export interface Employee{
    id: number;
    name: string;
    salary: number;
    dateOfBirth: Date;
    permanent: boolean;
    department: Department;
    skills: Skill[];
}