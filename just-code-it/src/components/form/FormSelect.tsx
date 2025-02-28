import { useState } from 'react'
import { FormSelectType } from '../../utils/types'

function FormSelect({
  label,
  name,
  placeholder,
  options,
  formValue,
  handleChange,
}: FormSelectType) {
  const [isChanged, setIsChanged] = useState(false)
  return (
    <div className="flex flex-col gap-1 my-2.5">
      <label htmlFor={name} className="font-semibold capitalize">
        {label || name}
      </label>
      <select
        name={name}
        id={name}
        className={`border border-transparent rounded-md focus:border focus:border-custompurple bg-gray-50 ${
          isChanged ? 'text-whiteforeground' : 'text-gray-500'
        }
         py-1.5 px-1 outline-none text-sm`}
        value={formValue}
        onChange={(e) => {
          handleChange(e)
          setIsChanged(true)
        }}
        required
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option: string, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          )
        })}
      </select>
    </div>
  )
}
export default FormSelect
