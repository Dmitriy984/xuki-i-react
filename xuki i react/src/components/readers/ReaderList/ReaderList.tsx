import { mockReaders } from '../../../mocks/readers';
import ReaderCard from '../ReaderCard/ReaderCard';

const ReaderList = () => {
  return (
    <div className="reader-list">
      {mockReaders.map(reader => (
        <ReaderCard key={reader.id} reader={reader} />
      ))}
    </div>
  );
};
export default ReaderList;
    