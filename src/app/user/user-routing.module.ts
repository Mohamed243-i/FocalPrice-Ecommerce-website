import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MassageComponent } from './components/massage/massage.component';

const routes: Routes = [
  {
  path:"",component:ProfileComponent
},
{
  path:"profile",component:ProfileComponent
},
{
  path:"editProfile",component:EditProfileComponent
},
{
  path:"massages",component:MassageComponent
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
