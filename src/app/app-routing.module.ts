import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path:'',component:TasksComponent},
  {path:'about',component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
