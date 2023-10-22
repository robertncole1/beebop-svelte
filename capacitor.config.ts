import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'beebop',
  webDir: 'build-static',
  server: {
    androidScheme: 'https'
  }
};

export default config;
