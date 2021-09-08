import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin : boolean = false
  firstName:any='';
  lastName:any='';

  constructor(private _AuthService:AuthService) {

  }



  ngOnInit(): void {
    this._AuthService.currenUser.subscribe((data:any)=>{
      this.firstName=data?.first_name
      this.lastName=data?.last_name

      if(this._AuthService.currenUser.getValue() != null)
      {
        this.isLogin = true
      }
      else
      {
        this.isLogin = false
      }
    })
  }


  isLogout(){
    this._AuthService.logout()
  }

}
