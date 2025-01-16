import { useState } from 'react'
import { Task } from '../types'

type FormProps = {
  addTask: (task: Task) => void
}

const Form = ({ addTask }: FormProps) => {
  const [text, setText] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!text) {
      return alert('Please enter a task')
    }
    /* add task */
    addTask({
      id: new Date().getTime().toString(),
      description: text,
      isCompleted: false,
    })
    setText('')

    return
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
        className="form-input"
      />
      <button type="submit" className="btn">
        Add Task
      </button>
    </form>
  )
}
export default Form
