type Task = {
  id: number
  title: string
  description: string
  completed: boolean
}

type TaskListProps = {
  tasks: Task[]
  onUpdateTask: (task: Task) => void
  onDeleteTask: (id: number) => void
}

export default function TaskList({ tasks, onUpdateTask, onDeleteTask }: TaskListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="border p-2 mb-2 flex justify-between items-center">
          <div>
            <h3 className="font-bold">{task.title}</h3>
            <p>{task.description}</p>
          </div>
          <div>
            <button
              onClick={() => onUpdateTask({ ...task, completed: !task.completed })}
              className={`mr-2 p-1 rounded ${task.completed ? "bg-green-500" : "bg-yellow-500"} text-white`}
            >
              {task.completed ? "Completed" : "Mark Complete"}
            </button>
            <button onClick={() => onDeleteTask(task.id)} className="bg-red-500 text-white p-1 rounded">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

