const { MODE, VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, VITE_SENTRY_DSN_URL } = import.meta.env;

export const ENV = {
  MODE,
  SENTRY_DSN_URL: VITE_SENTRY_DSN_URL,
  SUPABASE_URL: VITE_SUPABASE_URL,
  SUPABASE_ANON_KEY: VITE_SUPABASE_ANON_KEY,
};
