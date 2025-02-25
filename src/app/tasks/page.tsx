"use client"

import { useState } from "react"
import TaskForm from "@/components/TaskForm"
import TaskList from "@/components/TaskList"

type Task = {
  id: number
  title: string
  description: string
  completed: boolean
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (task: Omit<Task, "id" | "completed">) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }])
  }

  const updateTask = (updatedTask: Task) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
    </div>
  )
}

