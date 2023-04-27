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
    API_TOKEN: "7077c829fead421cd0c63713653bd38435a9c443",
  },
};

module.exports = nextConfig;
