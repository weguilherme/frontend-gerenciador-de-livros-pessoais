import { EventEmitter, Injectable, Output } from '@angular/core';
import { isEmpty } from 'rxjs';
import { responseLogin } from '../models/responseLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public loginResponse!:responseLogin;

 showMenuEmitter: EventEmitter<Boolean>= new EventEmitter<Boolean>();

  public clear():void{
    this.showMenuEmitter.emit(false)
    sessionStorage.removeItem('token');
  }

  public isAuthenticated():boolean{
    if(sessionStorage.getItem('token') == null){
      this.showMenuEmitter.emit(false)
      return false;
    }
    
    this.showMenuEmitter.emit(true)
    return true;
  }
}
