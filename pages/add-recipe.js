import { useState } from 'react';
import { useRouter } from 'next/router';

import MealForm from '@/components/form/MealForm';

import styles from '@/styles/AddRecipe.module.css';
import Title from '@/components/Head';

export default function AddMealForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    when: '',
    max_reservations: 0,
    price: 0,
    created_date: new Date(),
    number_of_guests: 0,
    contact_number: '',
    contact_name: '',
    contact_email: '',
    review_title: '',
    review_description: '',
    stars: 0
  })
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedWhen = new Date(formData.when).toISOString();
    try {
      const response = await fetch('/api/meals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          when: formattedWhen
        })
      });

      if (response.ok) {
        router.push('/');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'An error occurred');
      }
    } catch (error) {
      console.error('Error creating meal:', error);
      setError('An error occurred')
    }
  };

  return (
    <>
      <Title title="Add New Recipe" />
      <div className={ styles.create }>
        
        <MealForm formData={formData} onChange={handleChange} />

        <button className={ styles.btn } type="submit" onClick={handleSubmit}>Add Meal</button>
        <button className={ styles.btn } onClick={() => router.back()}>Go Back</button>

        {error && (
          <div className={ styles.error }>
            {error}
          </div>
        )}

      </div>
    </>
  )
}