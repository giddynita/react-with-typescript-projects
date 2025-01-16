import { useEffect, useState } from 'react'
import type { Task } from './types'
import Form from './components/Form'
import Tasks from './components/Tasks'

const loadTasks = (): Task[] => {
  const storedTasks = localStorage.getItem('tasks')
  return storedTasks ? JSON.parse(storedTasks) : []
}

const updateStorage = (taskList: Task[]): void => {
  localStorage.setItem('tasks', JSON.stringify(taskList))
}

function App() {
  const [taskList, setTaskList] = useState<Task[]>(() => loadTasks())

  const addTask = (task: Task): void => {
    setTaskList([...taskList, task])
  }
  const removeTask = (id: string): void => {
    const filterTask = taskList.filter((task) => task.id !== id)
    setTaskList(filterTask)
  }
  const toggleTask = (id: string) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted }
        }
        return task
      })
    )
  }

  useEffect(() => {
    updateStorage(taskList)
  }, taskList)

  return (
    <section className="container">
      <h2 className="title">task manager</h2>
      <Form addTask={addTask} />
      {taskList.length !== 0 && (
        <h3 className="subtitle">{taskList.length > 1 ? 'tasks' : 'task'}</h3>
      )}
      <Tasks
        taskList={taskList}
        toggleTask={toggleTask}
        removeTask={removeTask}
      />
    </section>
  )
}
export default App
