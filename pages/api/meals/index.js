import { prisma } from "@/lib/prisma";

const handler = async (req, res) => {
  try {
    await postMeal(req, res);
  }
  catch (error) {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

export default handler;

const postMeal = async (req, res) => {
  try {
    const {
      title,
      description,
      location,
      when,
      max_reservations,
      price,
      number_of_guests,
      contact_number,
      contact_name,
      contact_email,
      review_title,
      review_description,
      stars
    } = req.body;

    // Create the meal, reservation & review
    const newMeal = await prisma.meal.create({
      data: {
        title,
        description,
        location,
        when,
        max_reservations: parseInt(max_reservations),
        price,
        created_date: new Date(req.body.created_date),
        reservation: {
          create: {
            number_of_guests: parseInt(number_of_guests),
            contact_number,
            contact_name,
            contact_email,
            created_date: new Date(req.body.created_date)
          }
        },
        review: {
          create: {
            title: review_title,
            description: review_description,
            stars: parseInt(stars),
            created_date: new Date(req.body.created_date)
          }
        }
      },
      include: {
        reservation: true,
        review: true,
      }
    })

    res.status(201).json(newMeal);
  }
  catch (error) {
    console.error('Error creating meal:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}