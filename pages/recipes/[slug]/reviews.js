import { useRouter } from 'next/router';
import { prisma } from '@/lib/prisma';

import Title from '@/components/Head';
import ReviewInfo from '@/components/meal/ReviewsInfo';
import Skeleton from '@/components/Skeleton';

import styles from '@/styles/Recipes.module.css';

export const getStaticPaths = async () => {

  const res = await prisma.review.findMany({
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
  const review = await prisma.review.findUnique({
    where: { id: +params.slug },
    select: {
      id: true, title: true, description: true, meal_id: false, stars: true, created_date: false
    }
  })
  
  if (!review) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  review.stars = review.stars.toString()

  return {
    props: { review },
    revalidate: 1
  }
}

export default function Reviews({ review }) {
  const router = useRouter();

  if (!review) return <Skeleton />

  return (
    <>
      <Title title="Reviews" />
      <div>
        <div className={ styles.banner }>
          <h2>Review - { review.id }</h2>
        </div>

        <ReviewInfo review={review} />

        <button className={ styles.btn } onClick={() => router.back()}>Go back</button>
      </div>
    </>
  )
}