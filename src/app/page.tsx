"use client";
import React, { useState, useEffect } from "react";
import CreateCampaignForm from "./components/CreateCampaignForm";
import CampaignCard from "./components/CampaignCard";
import Link from "next/link";

type Campaign = {
  id: number;
  title: string;
  goal: string;
  raised: string;
};

export default function Home() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    // Simulate fetching data
    const mockCampaigns: Campaign[] = [
      { id: 1, title: "Help John’s Medical Bills", goal: 5000, raised: 2000 },
      { id: 2, title: "School Supplies for Kids", goal: 3000, raised: 1500 },
      { id: 3, title: "Community Garden", goal: 2000, raised: 1800 },
    ];
    setCampaigns(mockCampaigns);
  }, []); // Empty bracaket shows that this runs once on mount

  const addCampaign = (newCampaign: { title: string; goal: number }) => {
    setCampaigns((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title: newCampaign.title,
        goal: newCampaign.goal,
        raised: 0,
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Donation Platform
      </h1>
      <CreateCampaignForm onAddCampaign={addCampaign} />
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {campaigns.map((campaign) => (
          <Link key={campaign.id} href={`/campaign/${campaign.id}`}>
            <CampaignCard campaign={campaign} />
          </Link>
        ))}
      </div>
    </div>
  );
}
