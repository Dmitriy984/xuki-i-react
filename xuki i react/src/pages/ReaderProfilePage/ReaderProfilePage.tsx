import { useParams, useNavigate } from 'react-router-dom';
import { mockReaders } from '../../mocks/readers';
import ReaderProfile from '../../components/readers/ReaderProfile/ReaderProfile';

const ReaderProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const reader = mockReaders.find(r => r.id === id);

  if (!reader) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Читатель не найден</h1>
        <p>Пользователь с ID {id} не существует.</p>
        <button onClick={() => navigate('/readers')}>Назад к читателям</button>
      </div>
    );
  }

  return (
    <div>
      <ReaderProfile reader={reader} />
      <button onClick={() => navigate(-1)} style={{ marginTop: '20px' }}>← Назад</button>
    </div>
  );
};
export default ReaderProfilePage;
