import { useState } from 'react';

import styles from '@/styles/EditMealModal.module.css';

function EditMealModal({ meal, onClose, onSave }) {
  const [editedMeal, setEditedMeal] = useState({ ...meal });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedMeal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedMeal);
    onClose();
  };

  return (
    <div className={ styles.edit }>
      <div className={ styles.form }>
        <h2>Edit Meal</h2>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={editedMeal.title}
          onChange={handleChange}
          required
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={editedMeal.description}
          onChange={handleChange}
          required
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default EditMealModal;
