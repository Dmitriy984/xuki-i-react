interface BookCoverProps {
  cover: string;
}

const BookCover = ({ cover }: BookCoverProps) => {
  return (
    <div style={{ width: '200px', height: '300px', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span>📖 Обложка</span>
    </div>
  );
};
export default BookCover;
