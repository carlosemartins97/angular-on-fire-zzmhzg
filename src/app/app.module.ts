import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCpzV3qMFPI2_BwBZ069YrdgnL_slK4wY8',
      authDomain: 'aula-angular-1.firebaseapp.com',
      projectId: 'aula-angular-1',
      storageBucket: 'aula-angular-1.appspot.com',
      messagingSenderId: '963139671085',
      appId: '1:963139671085:web:adc6ef83366f82619dd4a4',
    }),
    AngularFireAuthModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [AuthService],
})
export class AppModule {}
