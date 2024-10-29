import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  display = true
  
  Toogle()
{
   this.display=!this.display 
  }
  list:any[]=[]
  AddTask(item:string)
  {
    
    this.list.push({ id: this.list.length, name: item })
    console.warn(this.list);
  }
  removetask(id:number)
  {
    console.warn(id)
    this.list=this.list.filter(item=>item.id!==id)
  }
}
