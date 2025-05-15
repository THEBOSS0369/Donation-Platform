interface TaskProps {
  title: string;
  dueDate: string;
  priority: string;
}

export default function TaskCard({ title, dueDate, priority }: TaskProps) {
  return (
    <div className="border p-4 rounded bg-stone-700">
      <h3 className="text-lg font-bold">{title}</h3>
      <p>Due: {dueDate}</p>
      <p>Priority: {priority}</p>
    </div>
  );
}
