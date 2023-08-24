export default function FormInput({ label, name, type, value, onChange, required }) {
  return (
    <div>
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  )
}