import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { UserdataService } from '../Services/userdata.service'
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  usersss: any;
  constructor(private userdataa: UserdataService) {
    console.warn("userdataa", userdataa.user1());
    this.usersss = userdataa.user1();
  }
}
