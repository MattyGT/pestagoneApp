import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrameworkComponent } from './components/framework/framework.component';
import { ClientComponent } from './components/client/client.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { EditJobCardComponent } from './components/edit-job-card/edit-job-card.component';
import { ViewJobCardComponent } from './components/view-job-card/view-job-card.component';
import { UsersComponent } from './components/users/users.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {'path': '', component: FrameworkComponent},
  {'path': 'clients', component: ClientComponent},
  {'path': 'clients/add', component: ClientComponent},
  {'path': 'clients/edit/:id', component: ClientComponent},
  {'path': 'jobcards', component: JobCardComponent},
  {'path': 'jobcards/add', component: EditJobCardComponent},
  {'path': 'jobcards/view/:id', component: ViewJobCardComponent},
  {'path': 'jobcards/edit/:id', component: EditJobCardComponent},
  {'path': 'users', component: UsersComponent},
  {'path': 'users/edit', component: UsersComponent},
  {'path': 'users/edit/:id', component: UsersComponent},
  {'path': 'login', component: LoginComponent},
  {'path': '**', component: NotfoundComponent}
];

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRouterModule { }
