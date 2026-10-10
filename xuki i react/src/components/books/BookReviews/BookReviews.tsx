import { IReview } from '../../../types/book.types';

interface BookReviewsProps {
  reviews: IReview[];
}

const BookReviews = ({ reviews }: BookReviewsProps) => {
  if (reviews.length === 0) {
    return <p>Отзывов пока нет.</p>;
  }

  return (
    <div>
      <h2>Отзывы ({reviews.length})</h2>
      {reviews.map(review => (
        <div key={review.id} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
          <p><strong>{review.readerName}</strong> — {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};
export default BookReviews;
