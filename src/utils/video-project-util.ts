function getProjectVideoURL(file: string): string {
  const videoURL = new URL(`../assets/videos/projects/${file}`, import.meta.url)
    .href;
  console.log(videoURL);
  return videoURL;
}
export default getProjectVideoURL;
