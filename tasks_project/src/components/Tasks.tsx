import { Task } from '../types'

type ListProps = {
  taskList: Task[]
  toggleTask: (id: string) => void
  removeTask: (id: string) => void
}

const Tasks = ({ taskList, toggleTask, removeTask }: ListProps) => {
  return (
    <ul className="tasks">
      {taskList.map(({ id, description, isCompleted }) => {
        return (
          <li key={id} className="single-task">
            <div>
              <button onClick={() => removeTask(id)}> x</button>
              <p>{description}</p>
            </div>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={() => {
                toggleTask(id)
              }}
            />
          </li>
        )
      })}
    </ul>
  )
}
export default Tasks
