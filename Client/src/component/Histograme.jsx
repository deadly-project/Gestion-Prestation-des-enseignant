// HistogrammeSalaire.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function HistogrammeSalaire({ users }) {

  // sécurité si pas de données
  const salaries = users?.length
    ? users.map(u => u.Taux_horaire * (u.Nb_heure || 0))
    : [];

  const total = salaries.length ? salaries.reduce((a, b) => a + b, 0) : 0;
  const minimum = salaries.length ? Math.min(...salaries) : 0;
  const maximum = salaries.length ? Math.max(...salaries) : 0;

  const chartData = {
    labels: ["Total", "Minimum", "Maximum"],
    datasets: [
      {
        label: "Salaires (Ar)",
        data: [total, minimum, maximum],
        backgroundColor: ["#3498db", "#2ecc71", "#e74c3c"]
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Statistiques des salaires des enseignants"
      },
      legend: {
        display: false
      }
    }
  };

  return (
    <div
      style={{
        width: "600px",
        height: "400px",
        background: "white",
        padding: "20px",
        borderRadius: "10px"
      }}
    >
      <Bar data={chartData} options={options} />
    </div>
  );
}