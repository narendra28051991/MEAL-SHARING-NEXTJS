import styles from '@/styles/Recipes.module.css';

export default function ReviewInfo({ review }) {
  const { title, description, stars } = review;

  return (
    <div className={ styles.info }>
        <h3>Review:</h3>
        <span>{ title }</span>
        <h3>Description:</h3>
        <span>{ description }</span>
        <h3>Rating:</h3>
        <span>{ stars } out of 5</span>
    </div>
  );
}
