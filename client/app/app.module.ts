/* App Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router } from '@angular/router';

/* Custom Modules */
import { UserModule } from './user';
import { InterviewModule } from './interviews';
import { ProfileModule } from './profiles';

/* Components */
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation';
import { HomeComponent } from './home';
import { ContactComponent } from './contact'

/* Services */
import * as Services from '../core/services';

/* Router */
import { APP_ROUTES } from './app.router';

@NgModule({
    imports: [
      BrowserModule, 
      FormsModule, 
      HttpModule,

      RouterModule.forRoot(APP_ROUTES, { useHash: true }),
      
      UserModule,
      InterviewModule,
      ProfileModule
    ],
    declarations: [
      AppComponent, 
      NavigationComponent,
      HomeComponent,
      ContactComponent
    ],
    providers: [ 
      Services.ApiService, 
      Services.UserService 
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
