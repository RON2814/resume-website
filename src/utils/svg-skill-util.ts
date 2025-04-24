function getSvgSkillURL(file) {
  return new URL(`../assets/svg/skills/${file}`, import.meta.url).href;
}
export default getSvgSkillURL;
