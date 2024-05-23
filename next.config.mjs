import { withSentryConfig } from "@sentry/nextjs";
/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  // Configuración de Next.js
};

export default withSentryConfig(nextConfig, {
  // Sentry Config
  org: "asimpl3-hero",
  project: "portafolio-nextjs",

  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
  silent: true,
  telemetry: false,
});
