import { Employee } from './../models/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  emloyees: Employee[] = [
      {
       id: 1,
       name: 'ragini',
       gender: 'female',
       email: 'ragini.nara@outlook.com',
       phoneNumber: 2482254385,
       contactPreference: 'emal',
       dateOfBirth: new Date('23-12-1985'),
       department: 'it',
       isActive: true,
       photoPath: 'assets/images/IMG_8438.jpeg'
   },
   {
    id: 2,
   name: 'ragini1',
   gender: 'female',
   email: 'ragini1.nara@outlook.com',
   phoneNumber: 2482254385,
   contactPreference: 'emal',
   dateOfBirth: new Date('23-12-1985'),
   department: 'it',
   isActive: true,
   photoPath: 'assets/images/IMG_8440.jpeg'
},
{
  id: 3,
 name: 'ragini2',
 gender: 'male',
 email: 'ragini2.nara@outlook.com',
 phoneNumber: 2482254385,
 contactPreference: 'emal',
 dateOfBirth: new Date('23-12-1985'),
 department: 'it',
 isActive: true,
 photoPath: 'assets/images/IMG_8445.jpeg'
}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
