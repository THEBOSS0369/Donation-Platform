import { useState } from "react";
import Button from "./Button.tsx";

interface TaskFormProps {
  // task is already defined in main page and as this is the props so we can call the task and it will be connected to each other once they join
  onAddTask: (task: Task) => void; // funciton to add task
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");

  return (
    // form for adding
    <form
      className="flex bg-stone-700 flex-col gap-2 p-4"
      onSubmit={(e) => {
        // prevent from reloading
        e.preventDefault();
        // using data.now for temp id
        onAddTask({ id: Date.now(), title, dueDate, priority });
        // Reset Form
        setTitle("");
        setDueDate("");
        setPriority("");
      }}
    >
      <input
        type="text"
        placeholder="Title"
        className=" bg-stone-600"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        placeholder="DueDate"
        className=" bg-stone-600"
        onChange={(e) => setDueDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="priority"
        value={priority}
        className=" bg-stone-600"
        onChange={(e) => setPriority(e.target.value)}
      />
      <Button label="Add Task" onClick={() => {}} />
    </form>
  );
}
