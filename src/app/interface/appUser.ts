import { AppUserRole } from "../enum/appUserRole.enum";

export interface AppUser{
  id :number;
  FirstName:string;
  LastName:string;
  email:string;
  password:string;
  appUserRoles:AppUserRole;
  enabled:boolean
}
