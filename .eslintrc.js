module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@takeda-digital/eslint-config-custom`
  extends: ["custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"]
    },
    react: {
      version: "detect"
    }
  }
};
