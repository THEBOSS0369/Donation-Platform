import React, { useRef } from "react";

type CreateCampaignFormProps = {
  onAddCampaign: (campaign: { title: string; goal: number }) => void;
};

export default function CreateCampaignForm({
  onAddCampaign,
}: CreateCampaignFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const goalRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (titleRef.current && goalRef.current) {
      onAddCampaign({
        title: titleRef.current.value,
        goal: parseInt(goalRef.current.value),
      });
      titleRef.current.value = "";
      goalRef.current.value = "";
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black p-6 rounded-lg shadow-md w-80"
    >
      <h2 className="text-xl font-semibold mb-4">Create a Campaign</h2>
      <input
        type="text"
        placeholder="Campaign Title"
        ref={titleRef}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="number"
        placeholder="Goal Amount"
        ref={goalRef}
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Create
      </button>
    </form>
  );
}
