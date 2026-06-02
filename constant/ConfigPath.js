const CONFIGPATH = {
  dev: {
    imagePath: "",
  },
  prod: {
    imagePath: "/portfolio-landing-page",
  },
};

export function getConfigPath() {
  return CONFIGPATH["dev"]; // Fallback to 'dev' if env is not defined
}
