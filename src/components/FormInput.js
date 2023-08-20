function FormInput({label, value, onChange}) {
  return (
    <div>
      <label>{label}</label>
      <input
        value={value}  
        onChange={e => onChange(e.target.value)} 
      />
    </div>
  )
}

export default FormInput;
