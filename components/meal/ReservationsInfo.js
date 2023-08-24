import styles from '@/styles/Recipes.module.css';

export default function ReservationInfo({ reservation }) {
  const { number_of_guests, contact_number, contact_name, contact_email } = reservation;

  return (
    <div className={styles.info}>
      <p>Each reservation can include {number_of_guests} guests.</p>
      <h3>Contact Number:</h3>
      <span>{contact_number}</span>
      <h3>Contact Name:</h3>
      <span>{contact_name}</span>
      <h3>Contact Email:</h3>
      <span>{contact_email}</span>
    </div>
  );
}