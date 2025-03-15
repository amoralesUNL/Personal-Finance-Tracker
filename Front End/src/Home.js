import React, { Component } from "react";
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

const fullMonthList = [
  "2025-01",
  "2025-02",
  "2025-03",
  "2025-04",
  "2025-05",
  "2025-06",
  "2025-07",
  "2025-08",
  "2025-09",
  "2025-10",
  "2025-11",
  "2025-12",
];

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthlySpending: [],
      monthlyIncome: [],
      yearlyIncome: [],
      yearlySpending: [],
      barLabels: [],
      barMonthlyData: [],
      barTitle: "",
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

  refreshMonthlyIncomeList() {
    fetch(variables.API_URL + "transaction/monthly-income")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data); // Log the data to verify it's fetched
        this.setState({ monthlyIncome: data });
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
    this.refreshMonthlyIncomeList();
    this.refreshYearlyIncomeList();
    this.refreshYearlySpendingList();
  }

  fetchData = () => {
    if (this.state.monthlySpending.length > 0) {
      const barMonthlyData = fullMonthList.map((month) => {
        const monthData = this.state.monthlySpending.find(
          (entry) => entry.MonthYear === month
        );
        return monthData ? monthData.TotalSpending : 0;
      });

      this.setState({
        barLabels: fullMonthList,
        barMonthlyData,
        barTitle: "Monthly Spending ($)",
      });
    }
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.monthlySpending !== this.state.monthlySpending) {
      this.fetchData();
    }
  }

  monthlyExpenseButton = () => {
    const spendData = fullMonthList.map((month) => {
      const monthData = this.state.monthlySpending.find(
        (entry) => entry.MonthYear === month
      );
      return monthData ? monthData.TotalSpending : 0;
    });

    this.setState({
      barMonthlyData: spendData,
      barLabels: fullMonthList,
      barTitle: "Monthly Spending ($)",
    });
  };
  monthlyIncomeButton = () => {
    const incomeData = fullMonthList.map((month) => {
      const monthData = this.state.monthlyIncome.find(
        (entry) => entry.MonthYear === month
      );
      return monthData ? monthData.TotalSpending : 0;
    });

    this.setState({
      barMonthlyData: incomeData,
      barLabels: fullMonthList,
      barTitle: "Monthly Income ($)",
    });
  };

  render() {
    const {
      yearlyIncome,
      yearlySpending,
      barLabels,
      barMonthlyData,
      barTitle,
    } = this.state;

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
      .filter((entry) => entry.TransactionType !== "Total")
      .map((entry) => entry.TransactionType);
    const yearlyExpenseData = yearlySpending
      .filter((entry) => entry.TransactionType !== "Total")
      .map((entry) => entry.TotalAmount);
    const TotalExpense = yearlySpending
      .filter((entry) => entry.TransactionType === "Total")
      .map((entry) => entry.TotalAmount);

    const spendingBarData = {
      labels: barLabels,
      datasets: [
        {
          label: barTitle,
          data: barMonthlyData,
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
            label: (context) => `$${context.raw}`,
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

        const largeFontSize = Math.round(width / 8); // Set Dynamic Text Size
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
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "right",
            paddingRight: "20px",
          }}
        >
          <div style={{ width: "52%" }}>
            <div
              class="dropdown"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <button
                class="btn btn-outline-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Filter
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="\transaction">
                  Action
                </a>
                <a class="dropdown-item" href="\transaction">
                  Another action
                </a>
              </div>
            </div>
            <div style={{ height: "450px", justifyContet: "center" }}>
              <Bar data={spendingBarData} options={options} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                paddingLeft: "60px",
                gap: "10px",
              }}
            >
              {" "}
              <button
                onClick={this.monthlyExpenseButton}
                type="button"
                class="btn btn-outline-primary"
              >
                Monthly Spending
              </button>
              <button
                onClick={this.monthlyIncomeButton}
                type="button"
                class="btn btn-outline-primary"
              >
                Monthly Income
              </button>
              <button type="button" class="btn btn-outline-primary"></button>
            </div>
          </div>
          <div style={{ paddingLeft: "20px", width: "350px", height: "460px" }}>
            {" "}
            <div class="card" style={{ width: "100%", height: "100%" }}>
              <div
                class="card-body"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div style={{ flex: "1", padding: "10px" }}>
                  <h5 class="card-title"> Notifications </h5>
                  <p class="card-text"> No due payments</p>
                </div>
                <div style={{ flex: "1", padding: "10px" }}>
                  <h5>Upcoming payments</h5>
                  <p>Cool More Text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
