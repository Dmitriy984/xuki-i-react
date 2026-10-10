interface BookInfoProps {
  title: string;
  author: string;
  year: number;
  genre: string;
  description: string;
}

const BookInfo = ({ title, author, year, genre, description }: BookInfoProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p><strong>Автор:</strong> {author}</p>
      <p><strong>Год:</strong> {year}</p>
      <p><strong>Жанр:</strong> {genre}</p>
      <p><strong>Описание:</strong> {description}</p>
    </div>
  );
};
export default BookInfo;
