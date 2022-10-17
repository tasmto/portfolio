import React from 'react'

type Props = {
  label: string
  name: string
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  required?: boolean
  value: string
}

const TextArea = ({ label, name, onChange, required, value }: Props) => {
  const [inputValue, setInputValue] = React.useState(value || '')
  const [inputHasFocus, setInputHasFocus] = React.useState(false)

  const focusStyles = `translate-y-[-0.8rem] text-sm text-gray-500`

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value)
    onChange(event)
  }
  return (
    <>
      <div className='relative z-0 w-full mb-5'>
        <textarea
          name={name}
          id={name}
          value={inputValue}
          required={required}
          className='pt-6 pb-4 px-4 bg-white block w-full mt-0 border appearance-none focus:outline-none focus:ring-0 rounded focus:border-primary-800 border-gray-400'
          onChange={handleInputChange}
          onBlur={() => setInputHasFocus(false)}
          onFocus={() => setInputHasFocus(true)}
          rows={3}
        ></textarea>
        <label
          htmlFor={name}
          className={`absolute duration-300 left-4 top-5 z-10 origin-0  text-gray-600 pointer-events-none  ${
            (inputHasFocus || inputValue) && focusStyles
          }`}
        >
          {label} {required && '*'}
        </label>
      </div>
    </>
  )
}

export default TextArea
