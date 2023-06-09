import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.weather.com',
  appName: 'weather-station',
  webDir: 'dist/weather-station',
  server: {
    androidScheme: 'https'
  }
};

export default config;
