"use client";
import { useContext } from "react";
import { TaskContext } from "./contexts/TaskContext.tsx";
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
  const { tasks, addTask } = useContext(TaskContext);

  return (
    <div>
      <h1>Welcome To Home</h1>
      <div className="flex flex-col gap-4 p-4">
        <TaskForm onAddTask={addTask} />
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            dueDate={task.dueDate}
            priority={task.priority}
          />
        ))}
      </div>
    </div>
  );
}
