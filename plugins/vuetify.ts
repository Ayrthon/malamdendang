import '@mdi/font/css/materialdesignicons.css'; // Import Material Design Icons
import 'vuetify/styles'; // Import Vuetify CSS styles
import { createVuetify } from 'vuetify';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#e4b244', // Gold
            secondary: '#424242', // Grey
            accent: '#82B1FF', // Light Blue Accent
            error: '#FF5252', // Red
            info: '#2196F3', // Blue
            success: '#4CAF50', // Green
            warning: '#FFC107', // Yellow
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: '#BB86FC', // Purple
            secondary: '#03DAC6', // Teal
            accent: '#03DAC6', // Teal
            error: '#CF6679', // Red
            info: '#2196F3', // Blue
            success: '#4CAF50', // Green
            warning: '#FB8C00', // Orange
          },
        },
      },
    },
    icons: {
      defaultSet: 'mdi', // Default to Material Design Icons
    },
    defaults: {
      VBtn: {
        rounded: 'lg',
        color: 'primary',
      },
      VTextField: {
        variant: 'outlined',
        density: 'comfortable',
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
