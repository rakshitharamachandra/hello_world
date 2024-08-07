import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { Capacitor } from '@capacitor/core';
import { initializeApp } from 'firebase/app';
import { getAuth, indexedDBLocalPersistence, initializeAuth } from 'firebase/auth';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

function provideAuth() {
  if (Capacitor.isNativePlatform()) {
    return initializeAuth(initializeApp({}), { // Initialize Firebase App with your config
      persistence: indexedDBLocalPersistence
    });
  } else {
    return getAuth(initializeApp({})); // Initialize Firebase App with your config
  }
}
