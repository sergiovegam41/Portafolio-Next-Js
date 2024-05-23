// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://28376455afd16af50ba011a80ac3b3e3@o4507303423180800.ingest.us.sentry.io/4507303592525824",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === 'development',
});
