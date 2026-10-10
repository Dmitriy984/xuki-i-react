import { useNavigate } from 'react-router-dom';
import { IReader } from '../../../types/reader.types';

interface ReaderCardProps {
  reader: IReader;
}

const ReaderCard = ({ reader }: ReaderCardProps) => {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate(`/reader/${reader.id}`);
  };

  return (
    <div className="reader-card" style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '15px' }}>
      <h3>{reader.name}</h3>
      <p>Email: {reader.email}</p>
      <p>Книг на руках: {reader.booksCount}</p>
      <button onClick={handleProfile}>Профиль</button>
    </div>
  );
};
export default ReaderCard;
