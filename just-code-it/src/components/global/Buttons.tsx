import { useFormStatus } from 'react-dom'

export function Button({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="w-20  bg-white border border-custompurple rounded-md capitalize py-1.5 md:py-2 text-custompurple cursor-pointer hover:bg-custompurple hover:text-white hover:border font-semibold text-xs transition transition-300"
    >
      {text}
    </button>
  )
}

export function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      className="text-md capitalize text-white bg-custompurple/80 hover:bg-custompurple py-2 px-8 rounded-full font-semibold mt-3 cursor-pointer text-lg"
      disabled={pending}
    >
      {pending ? 'please wait...' : text}
    </button>
  )
}
