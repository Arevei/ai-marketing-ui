import { useState } from "react";
import { useNavigate } from "react-router-dom";

const objectives = [
  "Generate 100 Leads",
  "Increase Sales",
  "Boost Website Traffic",
  "Build Brand Awareness",
];

export default function Objective() {
  const [selected, setSelected] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (!selected) return alert("Please select a campaign objective.");
    localStorage.setItem("campaignObjective", selected);
    navigate("/connect");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-2xl font-bold mb-6">🎯 Choose Your Campaign Objective</h1>
      <div className="grid gap-4">
        {objectives.map((obj) => (
          <button
            key={obj}
            className={`p-4 rounded border text-left ${
              selected === obj ? "bg-blue-600 text-white" : "bg-white"
            }`}
            onClick={() => setSelected(obj)}
          >
            {obj}
          </button>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
      >
        Continue
      </button>
    </div>
  );
}
