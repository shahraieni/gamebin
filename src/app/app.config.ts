import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { routes } from './app.routes';
import { environment } from '../environments/environment.development';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    {provide:FIREBASE_OPTIONS,useValue:environment.firebaseConfig},
    AngularFireAuthModule,
    AngularFirestoreModule,
    provideAuth(()=>getAuth())

  ],
  
    
};
