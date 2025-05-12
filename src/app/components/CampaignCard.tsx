import React from "react";

type Campaign = {
  id: number;
  title: string;
  goal: number;
  raise: number;
};

type CampaignCardProps = {
  campaign: Campaign;
};

export default function CampaignCard({ campaign }: CampaignCardProps) {
  const progress = (campaign.raised / campaign.goal) * 100;

  return (
    <div>
      <h1>{campaign.title}</h1>
      <p>${campaign.goal}</p>
      <p>${campaign.raised}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
        <button className="flex bg-gray-600 flex-col justify-center items-center">
          Hello
        </button>
      </div>
    </div>
  );
}
