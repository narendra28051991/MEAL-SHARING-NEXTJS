import { prisma } from '@/lib/prisma'

import RecipeCard from '@/components/meal/RecipeCard'
import Title from '@/components/Head';

import styles from '@/styles/Home.module.css';

export async function getStaticProps() {

  const response = await prisma.meal.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      location: true,
      max_reservations: true,
      price: true
    }
  })

  const recipes = response.map(recipe => ({
    ...recipe,
    price: recipe.price.toString()
  }));

  return {
    props: {
      recipes,
    },
    revalidate: 1
  }
}

export default function Recipes({ recipes }) {

  return (
    <>
      <Title title="Recipes" />
      <div>
        <div className={ styles.recipes }>
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  )
}