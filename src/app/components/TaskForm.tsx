import { useState, useEffect } from "react";
import Button from "./Button.tsx";

interface TaskFormProps {
  // task is already defined in main page and as this is the props so we can call the task and it will be connected to each other once they join
  onAddTask: (task: Task) => void; // funciton to add task
  taskToEdit?: Task; // optional to edit task
  onEditTask?: (id: number, updatedTask: Task) => void; // funciton to edit
  onCancel?: () => void; // function to cancel editing
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDueDate(taskToEdit.dueDate);
      setPriority(taskToEdit.priority);
    } else {
      setTitle("");
      setDueDate("");
      setPriority("");
    }
  }, [taskToEdit]);

  return (
    // form for adding
    <form
      className="flex bg-stone-700 flex-col gap-2 p-4"
      onSubmit={(e) => {
        // prevent from reloading
        e.preventDefault();
        if (!title || !priority || !dueDate) {
          alert("All fields are required");
          return;
        }
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
