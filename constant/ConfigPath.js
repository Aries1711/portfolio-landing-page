const CONFIGPATH = {
  dev: {
    imagePath: "",
  },
  prod: {
    imagePath: "/portfolio-landing-page",
  },
};

export function getConfigPath() {
  return CONFIGPATH["prod"]; // Fallback to 'dev' if env is not defined
}
