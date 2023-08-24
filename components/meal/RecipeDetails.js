import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/router';

import { useState } from 'react';

import EditMealModal from '@/components/EditMealModal';
import Skeleton from '@/components/Skeleton';

import styles from '@/styles/RecipeDetails.module.css'

export default function RecipeDetails({ recipe }) {
  if (!recipe) return <Skeleton />

  const router = useRouter();
  const { title, description, location, max_reservations, price } = recipe
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveMeal = async (editedMeal) => {
    try {
      await fetch(`/api/meals/${recipe.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          updatedFields: editedMeal,
        }),
      });

      console.log('Meal updated successfully!');
      handleCloseModal();
      router.push('/')
    }
    catch (error) {
      console.error('Error updating meal:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/meals/${recipe.id}`, {
        method: 'DELETE',
      });

      if (response.status === 200) {
        console.log('Meal deleted successfully!');
        router.push('/');
      } else {
        console.error('Error deleting meal:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting meal:', error);
    }
  };

  return (
    <div>
      <div className={ styles.banner }>
        <h2>{ title }</h2>
      </div>

      <div className={ styles.info }>
        <p>Capacity for about { max_reservations } people to sit.</p>
        <h3>Price:</h3>
        <span>{ price } dkr</span>
        <h3>Location:</h3>
        <span>{ location }</span>
      </div>
        
      <div className={ styles.method }>
        <h3>Description:</h3>
        <div>{ description }</div>
      </div>

      <div className={ styles.banner }>
        <h3 className={ styles.feature }><Link legacyBehavior href={'/recipes/' + recipe.id + '/reservations'}><a>Get Reservations</a></Link></h3>
        <h3 className={ styles.feature }><Link legacyBehavior href={'/recipes/' + recipe.id + '/reviews'}><a>Get Reviews</a></Link></h3>
      </div>

      <div className={ styles.buttons }>
        <button className={ styles.edit } onClick={handleOpenModal}>
          <Image width={35} height={35} src="/edit.svg" alt="edit icon" />
        </button>
        <button className={ styles.delete } onClick={handleDelete}>
          <Image width={35} height={35} src="/trashcan.svg" alt="delete icon" />
        </button>
        <button className={ styles.back } onClick={() => router.back()}>
          <Image width={35} height={35} src="/back.svg" alt="backward icon" />
        </button>
      </div>

      {isModalOpen && (
        <EditMealModal
          meal={recipe}
          onClose={handleCloseModal}
          onSave={handleSaveMeal}
        />
      )}
    </div>
  )
}