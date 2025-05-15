"use client";
import Button from "./components/Button.tsx";
import TaskCard from "./components/TaskCard.tsx";
import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm.tsx";

interface Task {
  // id will be unique
  id: number;
  title: string;
  dueDate: string;
  priority: string;
}

export default function Home() {
  // tasks is an array and settask updates it
  // Task[] tells tsx that tasks is an arry of Task object
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Groceries", dueDate: "15:05:25", priority: "High" },
    { id: 2, title: "Stationary", dueDate: "17:05:25", priority: "Medium" },
  ]);

  const handleTask = (newTask: Task) => {
    // add new task to arrray
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    console.log("Task Added: ", tasks);
  }, [tasks]);

  return (
    <div>
      <h1>Welcome To Home</h1>
      <div className="flex flex-col gap-4 p-4">
        <TaskForm onAddTask={handleTask} />
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            dueDate={task.dueDate}
            priority={task.priority}
          />
        ))}
        <Button label="Button" onClick={() => alert("Button Clikced")} />
      </div>
    </div>
  );
}
