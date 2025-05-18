import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import Button from "./Button.tsx";

interface TaskProps {
  title: string;
  dueDate: string;
  priority: string;
}

export default function TaskCard({ title, dueDate, priority, id }: TaskProps) {
  const context = useContext(TaskContext);
  return (
    <div className="border p-4 rounded bg-stone-700">
      <h3 className="text-lg font-bold">{title}</h3>
      <p>Due: {dueDate}</p>
      <p>Priority: {priority}</p>
      <Button label="Delte" onClick={() => context?.deleteTask(id)} />
      <Button label="Edit" onClick={() => context?.editTask(id)} />
    </div>
  );
}
