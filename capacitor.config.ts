import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'beebop.com',
  appName: 'beebop',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
