import { withSentryConfig } from "@sentry/nextjs";
// import { env } from "process";
/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  // Configuración de Next.js
};

export default withSentryConfig(withSentryConfig(nextConfig, {
org: "asimpl3-hero",
project: "portafolio-nextjs",
authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
widenClientFileUpload: true,
transpileClientSDK: true,
hideSourceMaps: true,
disableLogger: true,
automaticVercelMonitors: true,
silent: true,
telemetry: false,
}), {
org: "sergiomarica",
project: "portafolio",
silent: !process.env.CI,
widenClientFileUpload: true,
hideSourceMaps: true,
disableLogger: true,
automaticVercelMonitors: true,
});





// import {
//   withSentryConfig
// } from "@sentry/nextjs";
// import {
//   env
// } from "process";

// /**
//  * @type {import('next').NextConfig}
//  */

// const nextConfig = {
//   // Configuración de Next.js
// };

// export default withSentryConfig(nextConfig, {
//   // Sentry Config
//   org: "asimpl3-hero",
//   project: "portafolio-nextjs",
//   authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
//   widenClientFileUpload: true,
//   transpileClientSDK: true,
//   hideSourceMaps: true,
//   disableLogger: true,
//   automaticVercelMonitors: true,
//   silent: true,
//   telemetry: false,
// });

