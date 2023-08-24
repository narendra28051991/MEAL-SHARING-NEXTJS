import { useRouter } from 'next/router';
import { prisma } from '@/lib/prisma';

import Title from '@/components/Head';
import ReservationInfo from '@/components/meal/ReservationsInfo';
import Skeleton from '@/components/Skeleton';

import styles from '@/styles/Recipes.module.css';

export const getStaticPaths = async () => {

  const res = await prisma.reservation.findMany({
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
  const reservation = await prisma.reservation.findUnique({
    where: { id: +params.slug },
    select: {
      id: true, number_of_guests: true, meal_id: false, created_date: false, contact_number: true, contact_name: true, contact_email: true
    }
  })
  
  if (!reservation) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  reservation.number_of_guests = reservation.number_of_guests.toString()

  return {
    props: { reservation },
    revalidate: 1
  }
}

export default function Reservations({ reservation }) {
  const router = useRouter();

  if (!reservation) return <Skeleton />

  return (
    <>
      <Title title="Reservations" />
      <div>
        <div className={ styles.banner }>
          <h2>Reservation - { reservation.id }</h2>
        </div>

        <ReservationInfo reservation={reservation} />

        <button className={ styles.btn } onClick={() => router.back()}>Go back</button>
      </div>
    </>
  )
}