import Link from 'next/link';

import styles from '@/styles/RecipeCard.module.css';

export default function RecipeCard({ recipe }) {
  const { id, title, description, location, max_reservations, price } = recipe

  return (
    <div className={ styles.card }>
      <div className={ styles.featured }>
        { description }
      </div>
      <div className={ styles.content }>
        <div className={ styles.info }>
          <h4>{ title }</h4>
          <p>Capacity for approximately { max_reservations } people</p>
          <h3>Estimated Price: { price } dkr</h3>
          <p>Location: { location }</p>
        </div>
        <div className={ styles.actions }>
          <Link legacyBehavior href={'/recipes/' + id}><a>Visit this</a></Link>
        </div>
      </div>
    </div>
  )
}