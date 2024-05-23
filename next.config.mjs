import { withSentryConfig } from "@sentry/nextjs";
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
};

export default withSentryConfig {
  // Opciones de configuración de Sentry
  org: "asimpl3-hero",
  project: "portafolio-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};
