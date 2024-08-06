import { Component } from '@angular/core';
import { Employee } from './model/Employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employee : Employee ;
  result :string;
  employeeArr : Employee[];
  flag : boolean;

  constructor( private service:EmployeeService){
    this.employee =new Employee();
    this.result="";
    this.employeeArr=[];
    this.flag=false;
  }
  insertEmployee(data:any){
    this.employee.id=data.donor;
    this.employee.Name=data.name;
    this.employee.Blood=data.blood;
    this.employee.Contact=data.contact;
    this.result=this.service.insertEmployee(this.employee);
  }
  updateEmployee(data:any){
    this.employee.id=data.donor;
    this.employee.Name=data.name;
    this.employee.Blood=data.blood;
    this.employee.Contact=data.contact;
    this.result=this.service.updateEmployee(this.employee);
  }
  deleteEmployee(data:any){

    this.result=this.service.deleteEmployee(data.empId);
  }
  findEmployee (data: any){
    this.employee=this.service.findEmployee(data.empId);
    this.result =this.employee.id+" "+this.employee.Name+" "+this.employee.Blood+" "+this.employee.Contact;
  }
  findAllEmployee(){
    this.employeeArr=this.service.findAllEmployee();
    this.flag=true;
  }
}
