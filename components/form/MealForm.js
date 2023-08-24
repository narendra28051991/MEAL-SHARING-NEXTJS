import FormInput from '@/components/form/FormInput';
import FormTextArea from '@/components/form/FormTextArea';

export default function MealForm({ formData, onChange }) {
    
  return (
    <form>
        <FormInput
          label="Title"
          name="title"
          type="text"
          value={formData.title}
          onChange={onChange}
          required
        />
        <FormTextArea
          label="Description"
          name="description"
          value={formData.description}
          onChange={onChange}
          required
        />
        <FormInput
          label="Location"
          name="location"
          type="text"
          value={formData.location}
          onChange={onChange}
          required
        />
        <FormInput
          label="Date and Time"
          name="when"
          type="datetime-local"
          value={formData.when}
          onChange={onChange}
          required
        />
        <FormInput
          label="Max Reservations"
          name="max_reservations"
          type="number"
          value={formData.max_reservations}
          onChange={onChange}
          required
        />
        <FormInput
          label="Price"
          name="price"
          type="number"
          step="0.01"
          value={formData.price}
          onChange={onChange}
          required
        />
        <FormInput
          label="Number of Guests"
          name="number_of_guests"
          type="number"
          value={formData.number_of_guests}
          onChange={onChange}
          required
        />
        <FormInput
          label="Contact Number"
          name="contact_number"
          type="text"
          value={formData.contact_number}
          onChange={onChange}
          required
        />
        <FormInput
          label="Contact Name"
          name="contact_name"
          type="text"
          value={formData.contact_name}
          onChange={onChange}
          required
        />
        <FormInput
          label="Contact Email"
          name="contact_email"
          type="email"
          value={formData.contact_email}
          onChange={onChange}
          required
        />
        <FormInput
          label="Review Title"
          name="review_title"
          type="text"
          value={formData.review_title}
          onChange={onChange}
          required
        />
        <FormTextArea
          label="Review Description"
          name="review_description"
          value={formData.review_description}
          onChange={onChange}
          required
        />
        <FormInput
          label="Stars out of 5"
          name="stars"
          type="number"
          value={formData.stars}
          onChange={onChange}
          required
        />
    </form>
  )
}