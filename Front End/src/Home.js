import React, { Component, use } from "react";
import { variables } from "./Variables";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  DoughnutController,
  ArcElement,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  DoughnutController,
  ArcElement
);

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
    const TotalIncome = "$25,000";

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

    const doughnutData = {
      labels: ["Salary", "Investements", "Savings"],
      datasets: [
        {
          label: "Income",
          data: [300, 90, 100],
          backgroundColor: [
            "rgb(255,99,132)",
            "rgb(54,162,235)",
            "rgb(57,255,20)",
          ],
          hoversetOffset: 4,
        },
      ],
    };

    const doughnutConfig = {
      responsive: true,
      type: "doughnut",
      data: doughnutData,
      cutout: "95%",
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            usePointStyle: true,
            padding: 10,
          },
        },
      },
    };

    const centerTextPlugin = {
      id: "centerText",
      beforeDatasetsDraw: (chart, args, plugins) => {
        const { width, ctx } = chart;
        const { top, bottom } = chart.chartArea;

        const xCenter = width / 2;
        const yCenter = top + bottom / 2;

        const largeFontSize = Math.round(width / 8);
        const smallFontSize = Math.round(width / 20);

        ctx.save();
        ctx.font = `${largeFontSize}px Arial`;
        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.fillText(TotalIncome, xCenter, yCenter - 10);

        ctx.font = `${smallFontSize}px Arial`;
        ctx.fillStyle = "grey";
        ctx.fillText("Total Income", xCenter, yCenter + 25);
        ctx.restore();
      },
    };

    return (
      <div>
        <h3>This is the Home page!</h3>

        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <div>
            {" "}
            <Doughnut
              data={doughnutData}
              options={doughnutConfig}
              plugins={[centerTextPlugin]}
            />
          </div>
          <div>
            {" "}
            <Doughnut
              data={doughnutData}
              options={doughnutConfig}
              plugins={[centerTextPlugin]}
            />
          </div>
        </div>
        <div
          style={{ display: "flex", width: "80%", justifyContent: "center" }}
        >
          <Bar data={data} options={options} />
        </div>
      </div>
    );
  }
}
