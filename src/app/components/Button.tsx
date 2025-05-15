"use client";
interface ButtonProps {
  label: string;
  // finctpn that returns nothing
  onClick: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
