import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularApp';
  public employees: Employee[];
  

constructor(private employeeService: EmployeeService){}

  ngOnInit() {
    this.getEmployees();
    this.getEmployees1();
  }
public onAddEmployee(addForm:NgForm):void{
  this.employeeService.addEmployee(addForm.value).subscribe((response:Employee)=>{
    console.log(response);
  },(error:HttpErrorResponse)=>{
    alert(error.message);
    this.getEmployees();
  });
}
  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
        console.log('...............');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );}
    public getEmployees1(): any {
      this.employeeService.getEmployees().subscribe(
        (response: Employee[]) => {
          this.employees = response;
          console.log(this.employees);
          console.log('...............');
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
        
      );return this.employees;
  }
  
  
  

}
