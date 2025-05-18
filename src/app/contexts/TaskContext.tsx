"use client";
import { createContext, useContext, useState } from "react";

interface Task {
  id: number;
  title: string;
  dueDate: string;
  priority: string;
}

interface TaskContextType {
  tasks: Task[];
  // here the task means that let's say task has some value(id:1 , title etc) it will match with the Task(info like id, duedata, title) etc
  // so task is value or data and Task is the type of the data like id will be integer
  addTask: (task: Task) => void;
  editedTask: (id: number, updatedTask: Task) => void;
  delteTask: (id: number) => void;
}

const TaskContext = createContext<TextContextType | undefined>(undefined);

const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };
  const editTask = (id: number, updatedTask: Task) => {
    // here tasks.map will create a new array then we will add the new data on it
    // map is usedto transform data like updating so we can't use it hree
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const deleteTask = (id: number) => {
    //folter is creating a new array but only includes the task which are passing the condition
    //this cond means that if id doesn't match keep it
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
