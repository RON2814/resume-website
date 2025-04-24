function getProjectImageURL(file) {
  return new URL(`../assets/images/projects/${file}`, import.meta.url).href;
}
export default getProjectImageURL;
