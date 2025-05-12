import { useContext } from "react";
import { CampaignContext } from "../context/CampaignContext";

export function useDonate() {
  const context = useContext(CampaignContext);
  if (!context) {
    throw new Error("useDonate must be used within a CampaignProvider");
  }

  const { donate } = context;

  const makeDonation = (id: number, amount: number) => {
    if (amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    donate(id, amount);
    alert(`Donated $${amount} successfully!`);
  };

  return { makeDonation };
}
