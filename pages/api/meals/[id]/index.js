import { prisma } from "@/lib/prisma" 

export default async function handler(req, res) {
    try {
        if (req.method === 'DELETE') {
            await deleteMeal(req, res)
        }
        else if (req.method === 'PUT') {
            await putMeal(req, res)
        }
        else {
            res.json({"message": "Method not found"})
        }
    }
    catch (error) {
        res.json(error)    
    }
}

const deleteMeal = async (req, res) => {
    const { id } = req.query;

    try {
      await prisma.meal.delete({
        where: { id: +id }
      });
      await prisma.reservation.deleteMany({
        where: { 
          meal: {
            id: +id
          }
        }
      });
      await prisma.review.deleteMany({
        where: { 
          meal: {
            id: +id
          }
        }
      });

      res.status(200).json({ message: 'Meal deleted successfully' });
    }
    
    catch (error) {
      console.error('Error deleting meal:', error);
      res.status(500).json({ message: 'An error occurred' });
    }
}

const putMeal = async (req, res) => {

    const { id } = req.query;

    const { updatedFields } = req.body;

    try {
      await prisma.meal.update({
        where: { id: +id },
        data: updatedFields,
      });

      res.status(200).json({ message: 'Meal updated successfully' });
    }
    
    catch (error) {
      console.error('Error updating meal:', error);
      res.status(500).json({ message: 'An error occurred' });
    }
}