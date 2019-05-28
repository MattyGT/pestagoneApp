import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppRouterModule } from './/approuter.module';

import { JobService } from './services/job.service';
import { ClientService } from './services/client.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { JobCardComponent } from './components/job-card/job-card.component';
import { EditJobCardComponent } from './components/edit-job-card/edit-job-card.component';
import { ClientComponent } from './components/client/client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FrameworkComponent } from './components/framework/framework.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UsersComponent } from './components/users/users.component';
import { InfobarComponent } from './components/infobar/infobar.component';
import { ViewJobCardComponent } from './components/view-job-card/view-job-card.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    JobCardComponent,
    EditJobCardComponent,
    ClientComponent,
    NavbarComponent,
    FrameworkComponent,
    NotfoundComponent,
    UsersComponent,
    InfobarComponent,
    ViewJobCardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    ClientService,
    JobService,
    UserService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
