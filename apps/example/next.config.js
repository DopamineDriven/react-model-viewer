/**
 * @type {import("next").NextConfig}
 */
module.exports = {
  swcMinify: true,
  typescript: { tsconfigPath: "./tsconfig.json" },
  reactStrictMode: true,
  output: "standalone"
};
