import { withSentryConfig } from "@sentry/nextjs";
import { env } from "process";
/**
 * @type {import('next').NextConfig}
 */
export default withSentryConfig(nextConfig, {
  // Opciones de configuración de Sentry
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
