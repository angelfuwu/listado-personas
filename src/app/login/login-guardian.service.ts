import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';


@Injectable()
export class LoginGuardian implements CanActivate{
    
    constructor(private loginService: LoginService,private rounter:Router){

    }

    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot){
        if(this.loginService.isAuth()){
            return true;
        }else{
            this.rounter.navigate(['login']);
            return false;
        }
    }

}