import { IReader } from '../../../types/reader.types';

interface ReaderProfileProps {
  reader: IReader;
}

const ReaderProfile = ({ reader }: ReaderProfileProps) => {
  return (
    <div className="reader-profile" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>{reader.name}</h1>
      <p><strong>Email:</strong> {reader.email}</p>
      <p><strong>Количество книг:</strong> {reader.booksCount}</p>
    </div>
  );
};
export default ReaderProfile;
