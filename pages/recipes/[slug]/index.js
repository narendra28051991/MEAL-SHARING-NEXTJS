import { prisma } from '@/lib/prisma';

import Title from '@/components/Head';
import RecipeDetails from '@/components/meal/RecipeDetails';

export const getStaticPaths = async () => {

  const res = await prisma.meal.findMany({
    select: {
      id: true
    }
  })  

  const paths = res.map(item => {
    return {
      params: { slug: item.id.toString() }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const recipe = await prisma.meal.findUnique({
    where: { id: +params.slug },
    select: {
      id: true, title: true, description: true, location: true, when: false, max_reservations: true, price: true, created_date: false
    }
  })
  
  if (!recipe) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  recipe.price = recipe.price.toString()

  return {
    props: { recipe },
    revalidate: 1
  }
}

export default function Recipe({ recipe }) {
  return (
    <>
      <Title title={ recipe.title } />
      <RecipeDetails recipe={recipe} />
    </>
  )
}