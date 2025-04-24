function getSvgSkillURL(file: string): string {
  return new URL(`../assets/svg/skills/${file}`, import.meta.url).href;
}
export default getSvgSkillURL;
