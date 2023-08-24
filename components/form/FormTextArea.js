export default function FormTextArea({ label, name, value, onChange, required }) {
  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  )
}