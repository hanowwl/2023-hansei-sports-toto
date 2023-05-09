/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MODE: 'production' | 'development';

  readonly VITE_SENTRY_DSN_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
