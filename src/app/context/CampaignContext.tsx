"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";

type Campaign = {
  id: number;
  title: string;
  raised: number;
  goal: number;
};

type CampaignContextType = {
  campaigns: Campaign[];
  addCampaign: (campaign: { title: string; goal: number }) => void;
  donate: (id: number, amount: number) => void;
};

export const CampaignContext = createContext<CampaignContextType | undefined>(
  undefined,
);

export function CampaignProvider({ children }: { children: ReactNode }) {
  const [campaign, setCampaign] = useState<Campaign[]>([]);

  useEffect(() => {
    const mockCampaigns: Campaign[] = [
      { id: 1, title: "Help John’s Medical Bills", goal: 5000, raised: 2000 },
      { id: 2, title: "School Supplies for Kids", goal: 3000, raised: 1500 },
      { id: 3, title: "Community Garden", goal: 2000, raised: 1800 },
    ];
    setCampaign(mockCampaigns);
  }, []);

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

  const donate = (id: number, raised: number) => {
    setCampaign((prev) =>
      prev.map((campaign) =>
        campaign.id === id
          ? { ...campaign, raised: campaign.raised + amount }
          : campaign,
      ),
    );
  };

  return (
    <CampaignContext.Provider value={{ campaign, addCampaign, donate }}>
      {children}
    </CampaignContext.Provider>
  );
}
