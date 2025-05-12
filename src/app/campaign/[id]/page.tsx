import React from "react";
import { notFound } from "next/navigation";
import { useDonate } from "../../hooks/useDonate";

type Campaign = {
  id: number;
  title: string;
  goal: number;
  raised: number;
};

export default function CampaignPage({ params }: { params: { id: string } }) {
  const campaigns: Campaign[] = [
    { id: 1, title: "Help John’s Medical Bills", goal: 5000, raised: 2000 },
    { id: 2, title: "School Supplies for Kids", goal: 3000, raised: 1500 },
    { id: 3, title: "Community Garden", goal: 2000, raised: 1800 },
  ];

  const campaign = campaigns.find((c) => c.id === parseInt(params.id));
  const { makeDonation } = useDonate();
  const amountRef = useRef<HTMLInputElement>(null);
  if (!campaign) {
    notFound();
  }

  const progress = (campaign.raised / campaign.goal) * 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amountRef.current) {
      const amount = parseInt(amountRef.current.value);
      makeDonation(campaign.id, amount);
      amountRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-blue-600 transition-transform duration-300 hover:scale-105">
        {campaign.title}
      </h1>
      <p className="text-lg mt-2">Goal: ${campaign.goal}</p>
      <p className="text-lg">Raised: ${campaign.raised}</p>
      <div className="w-64 bg-gray-200 rounded-full h-2.5 mt-4">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <form onSubmit={handleDonate} className="mt-6 w-64">
        <input
          type="number"
          placeholder="Donation Amount"
          ref={amountRef}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Donate
        </button>
      </form>
    </div>
  );
}
