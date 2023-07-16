import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
 
  public employees = [];


  constructor(private Eservice:EmployeeService) {
    console.log('called here');
    console.log(Eservice.getEmployees1());
    console.log(Eservice.getEmployees());
   }

  ngOnInit(): void {
    this.Eservice.getEmployees1().subscribe(data => this.employees = data);
    console.log(this.employees);
  }

}
