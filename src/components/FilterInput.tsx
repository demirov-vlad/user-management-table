import React from 'react'

interface FilterInputProps {
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FilterInput: React.FC<FilterInputProps> = ({ name, value, onChange }) => {
  return (
    <input
      type='text'
      name={name}
      placeholder={`Filter by ${name.charAt(0).toLocaleUpperCase() + name.slice(1)}`}
      value={value}
      onChange={onChange}
      autoComplete='off'
    />
  )
}

export default FilterInput
