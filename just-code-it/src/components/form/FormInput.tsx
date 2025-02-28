import { FormInputType } from '../../utils/types'

function FormInput({
  label,
  type,
  name,
  placeholder,
  formValue,
  handleChange,
}: FormInputType) {
  return (
    <div className="flex flex-col gap-1 my-2.5">
      <label htmlFor={name} className="font-semibold">
        {label || name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        className="border border-transparent rounded-md focus:border focus:border-custompurple bg-gray-50 py-1.5 px-2 outline-none text-sm placeholder:text-sm text-whiteforeground placeholder:text-gray-500"
        required
        value={formValue}
        onChange={handleChange}
      />
    </div>
  )
}
export default FormInput
