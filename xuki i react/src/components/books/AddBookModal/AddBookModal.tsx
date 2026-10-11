import { useState } from 'react';
import './AddBookModal.css';

interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (book: { title: string; author: string; year: string }) => void; // для второй ветки
}

const AddBookModal = ({ isOpen, onClose, onSave }: AddBookModalProps) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!title.trim()) newErrors.title = 'Название обязательно';
    if (!author.trim()) newErrors.author = 'Автор обязателен';
    if (year && !/^\d{4}$/.test(year)) newErrors.year = 'Год должен быть 4-значным числом';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log({ title, author, year });
    if (onSave) {
      onSave({ title, author, year });
    }
    handleClose();
  };

  const handleClose = () => {
    setTitle('');
    setAuthor('');
    setYear('');
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Добавление книги</h2>
          <button className="modal-close" onClick={handleClose}>×</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Название *</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={errors.title ? 'error' : ''}
            />
            {errors.title && <span className="error-text">{errors.title}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="author">Автор *</label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className={errors.author ? 'error' : ''}
            />
            {errors.author && <span className="error-text">{errors.author}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="year">Год издания</label>
            <input
              id="year"
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className={errors.year ? 'error' : ''}
            />
            {errors.year && <span className="error-text">{errors.year}</span>}
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-outline" onClick={handleClose}>
              Отмена
            </button>
            <button type="submit" className="btn btn-primary">
              Добавить книгу
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBookModal;
