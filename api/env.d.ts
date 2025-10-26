/// <reference types="node" />

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EMAIL_USER?: string;
      EMAIL_APP_PASSWORD?: string;
      NOTIFICATION_EMAIL?: string;
      GOOGLE_CLIENT_EMAIL?: string;
      GOOGLE_PRIVATE_KEY?: string;
      GOOGLE_SHEET_ID?: string;
    }
  }
}

export {};
