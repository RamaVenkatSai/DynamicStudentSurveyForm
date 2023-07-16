import { Component, NgModule, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  providers:[EmployeeService]
})

export class SurveyComponent implements OnInit {
  title = 'AngularApp';
  public employees: Employee[];
  
 


  constructor(private employeeService: EmployeeService){}

  ngOnInit() {
    this.getEmployees();
    this.getEmployees1();
  }
public onAddEmployee(addForm:NgForm):void{
  if(addForm.invalid){
    alert("PLease fill the required Fields");
    return;
  }
  
  this.employeeService.addEmployee(addForm.value).subscribe((response:Employee)=>{
    console.log(response);
    alert("Your Form has been successfully submitted have a look by clicking on display forms");
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
