import React, { Component } from "react";
import { variables } from "./Variables";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthlySpending: [],
      monthlyIncome: [],
    };
  }

  refreshMonthlySpendingList() {
    fetch(variables.API_URL + "transaction/monthly-spending")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Log the data to verify it's fetched
        this.setState({ monthlySpending: data });
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
  }
  componentDidMount() {
    this.refreshMonthlySpendingList();
  }

  render() {
    const { monthlySpending } = this.state;

    const labels = monthlySpending.map((entry) => entry.MonthYear); // X-axis labels
    const spendingData = monthlySpending.map((entry) => entry.TotalSpending); // Y-axis values

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Monthly Spending ($)",
          data: spendingData,
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: (context) => `$${context.raw}`, // Format tooltip to show dollar values
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Month",
          },
        },
        y: {
          title: {
            display: true,
            text: "Spending ($)",
          },
          beginAtZero: true,
        },
      },
    };

    return (
      <div>
        <h3>This is the Home page!</h3>
        <div style={{ width: "80%", margin: "0 auto" }}>
          <Bar data={data} options={options} />
        </div>
      </div>
    );
  }
}
