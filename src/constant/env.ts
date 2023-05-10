const { MODE, VITE_SENTRY_DSN_URL } = import.meta.env;

export const ENV = {
  MODE,
  SENTRY_DSN_URL: VITE_SENTRY_DSN_URL,
};
