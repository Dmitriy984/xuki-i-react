import { useState } from 'react';
import { IBook } from '../../../types/book.types';
import styles from './AddBookModal.module.css';

interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBook: (book: IBook) => void;
}

const initialFormState = {
  title: '',
  author: '',
  year: '',
  genre: '',
  description: '',
};

const AddBookModal = ({ isOpen, onClose, onAddBook }: AddBookModalProps) => {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.title.trim()) {
      newErrors.title = 'Название обязательно';
    }
    if (!form.author.trim()) {
      newErrors.author = 'Автор обязателен';
    }
    if (form.year && (isNaN(Number(form.year)) || Number(form.year) < 1000 || Number(form.year) > 2030)) {
      newErrors.year = 'Год должен быть числом от 1000 до 2030';
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newBook: IBook = {
      id: String(Date.now()),
      title: form.title.trim(),
      author: form.author.trim(),
      year: form.year ? Number(form.year) : 0,
      genre: form.genre.trim(),
      description: form.description.trim(),
      cover: '/covers/default.jpg',
      reviews: [],
    };

    onAddBook(newBook);
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setForm(initialFormState);
    setErrors({});
  };

  const handleOverlayClick = () => {
    resetForm();
    onClose();
  };

  const handleCancel = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Добавить книгу</h2>
          <button className={styles.closeButton} onClick={handleCancel}>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="title">Название *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={form.title}
              onChange={handleChange}
              className={errors.title ? styles.errorInput : ''}
            />
            {errors.title && <span className={styles.errorText}>{errors.title}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="author">Автор *</label>
            <input
              type="text"
              id="author"
              name="author"
              value={form.author}
              onChange={handleChange}
              className={errors.author ? styles.errorInput : ''}
            />
            {errors.author && <span className={styles.errorText}>{errors.author}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="year">Год</label>
            <input
              type="text"
              id="year"
              name="year"
              value={form.year}
              onChange={handleChange}
              placeholder="Например, 2023"
              className={errors.year ? styles.errorInput : ''}
            />
            {errors.year && <span className={styles.errorText}>{errors.year}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="genre">Жанр</label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={form.genre}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description">Описание</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={4}
            />
          </div>

          <div className={styles.modalFooter}>
            <button type="button" className={styles.btnSecondary} onClick={handleCancel}>
              Отмена
            </button>
            <button type="submit" className={styles.btnPrimary}>
              Добавить книгу
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBookModal;
