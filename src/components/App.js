import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, FileText, Package, UserCheck, ClipboardList } from "lucide-react";

export default function HomePage() {
  const navigate = useNavigate();

  // Simulated metrics state
  const [metrics, setMetrics] = useState({
    totalBudget: 0,
    activeContracts: 0,
    openProcurements: 0,
  });

  // Fetch metrics from API on load
  useEffect(() => {
    // Replace with real API call
    async function fetchMetrics() {
      try {
        const response = await fetch("/api/dashboard-metrics"); // <-- your API endpoint
        const data = await response.json();
        setMetrics(data);
      } catch (error) {
        console.error("Failed to fetch metrics:", error);
        // fallback demo data
        setMetrics({
          totalBudget: 12400000,
          activeContracts: 87,
          openProcurements: 15,
        });
      }
    }
    fetchMetrics();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 px-4 py-8">
      {/* Welcome message */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold">Welcome to IMPACT Dashboard</h1>
        <p className="text-xl italic mt-2 text-gray-700">
          Driving Strategic Impact through IT Spend, Budget Tracking, and Contract Visibility
        </p>
      </div>

      {/* Module Tiles */}
      <div className="flex justify-center items-center flex-wrap gap-10">
        <Card
          className="w-64 h-64 flex flex-col justify-center items-center shadow-lg hover:shadow-xl hover:scale-105 transition-all rounded-2xl cursor-pointer"
          onClick={() => navigate("/budget-lines")}
        >
          <DollarSign size={60} className="text-green-600" />
          <h2 className="text-xl font-semibold mt-4">Budget Lines</h2>
        </Card>

        <Card
          className="w-64 h-64 flex flex-col justify-center items-center shadow-lg hover:shadow-xl hover:scale-105 transition-all rounded-2xl cursor-pointer"
          onClick={() => navigate("/contracts")}
        >
          <FileText size={60} className="text-blue-600" />
          <h2 className="text-xl font-semibold mt-4">Contracts</h2>
        </Card>

        <Card
          className="w-64 h-64 flex flex-col justify-center items-center shadow-lg hover:shadow-xl hover:scale-105 transition-all rounded-2xl cursor-pointer"
          onClick={() => navigate("/procurements")}
        >
          <Package size={60} className="text-orange-500" />
          <h2 className="text-xl font-semibold mt-4">Procurements</h2>
        </Card>

        <Card
          className="w-64 h-64 flex flex-col justify-center items-center shadow-lg hover:shadow-xl hover:scale-105 transition-all rounded-2xl cursor-pointer"
          onClick={() => navigate("/vendors")}
        >
          <UserCheck size={60} className="text-purple-600" />
          <h2 className="text-xl font-semibold mt-4">Vendors</h2>
        </Card>

        <Card
          className="w-64 h-64 flex flex-col justify-center items-center shadow-lg hover:shadow-xl hover:scale-105 transition-all rounded-2xl cursor-pointer"
          onClick={() => navigate("/projects")}
        >
          <ClipboardList size={60} className="text-yellow-500" />
          <h2 className="text-xl font-semibold mt-4">Projects</h2>
        </Card>
      </div>

      {/* Quick Metrics */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="p-8 text-center shadow-md rounded-2xl">
          <h3 className="text-lg font-medium text-gray-600">Total Budget</h3>
          <p className="text-4xl font-bold text-green-700">
            ${metrics.totalBudget.toLocaleString()}
          </p>
        </Card>
        <Card className="p-8 text-center shadow-md rounded-2xl">
          <h3 className="text-lg font-medium text-gray-600">Active Contracts</h3>
          <p className="text-4xl font-bold text-blue-700">{metrics.activeContracts}</p>
        </Card>
        <Card className="p-8 text-center shadow-md rounded-2xl">
          <h3 className="text-lg font-medium text-gray-600">Open Procurements</h3>
          <p className="text-4xl font-bold text-orange-600">{metrics.openProcurements}</p>
        </Card>
      </div>
    </div>
  );
}
