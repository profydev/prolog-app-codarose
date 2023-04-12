/** @type {import('next').NextConfig} */
/* eslint @typescript-eslint/no-var-requires: "off" */
const { version } = require("./package.json");

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["prolog-api.profy.dev"],
  },
  env: {
    APP_VERSION_NUMBER: version,
  },
};

module.exports = nextConfig;
