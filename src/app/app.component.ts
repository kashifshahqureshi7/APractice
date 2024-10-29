import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from "./user-list/user-list.component";
import { HeaderComponent } from './header/header.component';
import { NgForm } from "@angular/forms"
import { FormsModule } from "@angular/forms"
import { ReactiveFormsModule } from '@angular/forms'


import { CommonModule } from "@angular/common";
import { ChildComponentComponent } from "./child-component/child-component.component";
import { ReactiveFormAndValidatorsComponent } from "./reactive-form-and-validators/reactive-form-and-validators.component";
import { FooterComponent } from "./footer/footer.component";
import { UserdataService } from "./Services/userdata.service";
import { ApidataService } from "./Services/apidata.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, HeaderComponent, CommonModule, FormsModule, ChildComponentComponent, ReactiveFormAndValidatorsComponent, ReactiveFormsModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practice';
  data = "Code Step By Step"
  displayval = '';
  name = 'Saqib';
  disable =false;
  count = 0;
  show = "yes";
  users = ['Kashif', 'Asif', 'Saqib', 'Ishfaq', 'Sadam'];
  userdetail = [
    { Name: 'Asif', Email: 'Asif@gmail.com', contact: '1111111' },
    { Name: 'Saqib', Email: 'Saqib@gamil.com', contact: '2222222' },
    { Name: 'Kashif', Email: 'Kashif@gmail.com', contact: '3333333' },
  ];
  Userss = [
    { Name: 'Ishfaq', Phone: '4444444', socialaccount:['facebook','whatsap'] },
    { Name: 'Sadam', Phone: '555555555', socialaccount:['twitter','telegram'] },
  ];
  colors = "red";
  BgColor = "blue";
  UpdateColor()
  {
    this.colors = "green";
    this.BgColor = "yellow";
  }
  getdata()
  {
    return "get function data"
  }
  getName(name:string,SecondName:string)
  {
    alert(name);
    alert(SecondName);
  }
  GetData(val:string)
  {
    console.warn(val)
  }
  getvalue(val:string)
  {
    console.warn(val)
    this.displayval=val
  }
  counter(type:string)
  {
    type == 'add' ? this.count++ : this.count--; 
  }
  userdata: any = {};
  SubmitData(data:NgForm)
  {
    console.warn(data)
    this.userdata= data;
  }
  chilprop = 10;
  UpdateChild()
  {
    this.chilprop =Math.floor( Math.random()*20)
  }
  childdata = "";

  
 // send data child to parent
  updatedata(item:string)
  {
    console.warn(item)
    this.childdata=(item)
  }
  Name: any;
  usersss: any;

  constructor(private userdataa: UserdataService)
  {
    console.warn("userdataa", userdataa.user1());
    this.usersss = userdataa.user1();
    
  
  }
 
}
