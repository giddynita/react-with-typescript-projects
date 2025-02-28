export type Course = {
  img: string
  title: string
  desc: string
}
export type Benefit = {
  icon: string
  benefit: string
  desc: string
}
export type FormInputType = {
  label?: string
  type: string
  name: string
  placeholder: string
  formValue: string
  handleChange: (e: any) => void
}

export type FormSelectType = {
  label?: string
  name: string
  placeholder: string
  options: string[]
  formValue: string
  handleChange: (e: any) => void
}
