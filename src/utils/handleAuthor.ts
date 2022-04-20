export default function handleCategory(
  authorId: number,
  authors: [{ id: number; name: string }]
) {
  const author = authors.find((author) => author.id === authorId);

  return author ? author.name : '';
}
