import { Bar } from "react-chartjs-2";
import Side from "../Side";
import { Grid } from '@mui/material';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
// import DonutChart from "./Donutchart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const option = {
  responsive: true,
  plugins: {
    legend: { position: "chartArea" },
    title: {
      display: true,
      text: "Product details",
    },
  },
};

const data = {
  labels: ["Electronic", "Sports", "Food", "Fashion", "Software", "Other"],
  datasets: [
    {
      label: "Not Expired",
      data: [5, 10, 40, 20, 10, 30],
      backgroundColor: "green",
    },
    {
      label: "Expired",
      data: [15, 20, 25, 40, 45, 60],
      backgroundColor: "blue",
    },
  ],
};

export default function BarChart() {
  return (
    <div className="App">
      
<Grid container spacing={2}>
    <Grid item xs={3}>
      
       <Side />
    </Grid>
    <Grid item xs={9}>
    <Bar options={option} data={data} />
    </Grid>
  </Grid>
 
    </div>
  );
}
