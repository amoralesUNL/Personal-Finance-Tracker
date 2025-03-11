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
      yearlyIncome: [],
      yearlySpending: [],
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

  refreshYearlyIncomeList() {
    fetch(variables.API_URL + "transaction/yearly-income")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Log the data to verify it's fetched
        this.setState({ yearlyIncome: data });
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
  }

  refreshYearlySpendingList() {
    fetch(variables.API_URL + "transaction/yearly-spending")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Log the data to verify it's fetched
        this.setState({ yearlySpending: data });
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
  }
  componentDidMount() {
    this.refreshMonthlySpendingList();
    this.refreshYearlyIncomeList();
    this.refreshYearlySpendingList();
  }

  render() {
    const { monthlySpending, yearlyIncome, yearlySpending } = this.state;

    // Bar Graph Data
    const labels = monthlySpending.map((entry) => entry.MonthYear); // X-axis labels
    const spendingData = monthlySpending.map((entry) => entry.TotalSpending); // Y-axis values
    //Doughnut Income Data
    const yearlyIncomeLabels = yearlyIncome
      .filter((entry) => entry.TransactionType !== "Total")
      .map((entry) => entry.TransactionType);
    const yearlyIncomeData = yearlyIncome
      .filter((entry) => entry.TransactionType !== "Total")
      .map((entry) => entry.TotalAmount);
    const TotalIncome = yearlyIncome
      .filter((entry) => entry.TransactionType === "Total")
      .map((entry) => entry.TotalAmount);

    //Doughnut Spending Data
    const yearlyExpenseLabels = yearlySpending
      .filter((entry) => entry.TransactionType != "Total")
      .map((entry) => entry.TransactionType);
    const yearlyExpenseData = yearlySpending
      .filter((entry) => entry.TransactionType != "Total")
      .map((entry) => entry.TotalAmount);
    const TotalExpense = yearlySpending
      .filter((entry) => entry.TransactionType === "Total")
      .map((entry) => entry.TotalAmount);
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
      maintainAspectRatio: false,
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

    const doughnutDataIncome = {
      labels: yearlyIncomeLabels,
      datasets: [
        {
          label: "Income",
          data: yearlyIncomeData,
          backgroundColor: [
            "rgb(255,99,132)",
            "rgb(54,162,235)",
            "rgb(57,255,20)",
          ],
          hoversetOffset: 4,
        },
        {
          label: "totalYearlyIncome",
          data: TotalIncome,
          backgroundColor: [
            "rgb(255,99,132)",
            "rgb(54,162,235)",
            "rgb(57,255,20)",
          ],
          hoversetOffset: 4,
          hidden: true,
        },
      ],
    };

    const doughnutConfigIncome = {
      responsive: true,
      type: "doughnut",
      data: yearlyIncomeData,
      TotalIncome,
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

    const doughnutConfigExpense = {
      responsive: true,
      type: "doughnut",
      data: yearlyExpenseData,
      TotalExpense,
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

    const doughnutDataExpense = {
      labels: yearlyExpenseLabels,
      datasets: [
        {
          label: "Expenses",
          data: yearlyExpenseData,
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(57, 255, 20)",
            "rgb(255, 159, 64)",
            "rgb(153, 102, 255)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(153, 51, 102)",
            "rgb(0, 255, 255)",
            "rgb(255, 99, 255)",
            "rgb(255, 204, 102)",
          ],
          hoversetOffset: 4,
        },
        {
          label: "TotalYearlyExpense",
          data: TotalExpense,
          backgroundColor: ["rgb(0, 0, 0)"],
          hoversetOffset: 4,
          hidden: true,
        },
      ],
    };
    const centerTextPlugin = {
      id: "centerText",
      beforeDatasetsDraw: (chart, args, plugins) => {
        const { width, ctx, data } = chart;
        const { top, bottom } = chart.chartArea;

        const xCenter = width / 2;
        const yCenter = top + bottom / 2;

        const largeFontSize = Math.round(width / 8);
        const smallFontSize = Math.round(width / 20);

        ctx.save();
        ctx.font = `${largeFontSize}px Arial`;
        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.fillText("$" + data.datasets[1].data[0], xCenter, yCenter - 10);
        ctx.font = `${smallFontSize}px Arial`;
        ctx.fillStyle = "grey";
        ctx.fillText("Total " + data.datasets[0].label, xCenter, yCenter + 25);
        ctx.restore();
      },
    };

    return (
      <div>
        <h3>WELCOME!</h3>

        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <div>
            {" "}
            <Doughnut
              data={doughnutDataIncome}
              options={doughnutConfigIncome}
              plugins={[centerTextPlugin]}
            />
          </div>
          <div>
            {" "}
            <Doughnut
              data={doughnutDataExpense}
              options={doughnutConfigExpense}
              plugins={[centerTextPlugin]}
            />
          </div>
        </div>
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <div style={{ width: "50%" }}>
            <div style={{ height: "450px", justifyContet: "center" }}>
              <Bar data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
