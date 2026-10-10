import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Извините, запрошенная страница не существует.</p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#3498db', color: 'white', textDecoration: 'none' }}>
        Вернуться на главную
      </Link>
    </div>
  );
};
export default NotFound;
