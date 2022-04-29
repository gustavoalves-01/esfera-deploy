export default function ReadingTime(content: string) {
  const postContent = content.replace(
    /<[^>]*>|\n|\r|\t|&\w{2,5};|<div[^>]+>|<\/div>/g,
    ''
  );

  const readingTime = Math.round(postContent.split(' ').length / 150);

  return readingTime;
}
