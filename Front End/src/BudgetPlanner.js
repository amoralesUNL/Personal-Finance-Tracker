import "./Styles.css";
import { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { PlannerStateContext } from "./PlannerStateContext";
export class BudgetPlanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summaryIncome: 0,
      summaryExpense: 0,
      housing: 0,
      living: 0,
      travel: 0,
      ent: 0,
    };
  }

  setSummaryIncome = (income) => {
    this.setState({ summaryIncome: income }, () => {
      console.log("State Updated", this.state.summaryIncome);
    });
  };

  setSummaryExpense = () => {
    this.setState(
      {
        summaryExpense:
          (Number(this.state.housing) || 0) +
          (Number(this.state.living) || 0) +
          (Number(this.state.travel) || 0) +
          (Number(this.state.ent) || 0),
      },
      () => {
        console.log("State Updated", this.state.summaryExpense);
      }
    );
  };
  setHousingExpense = (expense) => {
    this.setState({ housing: expense }, () => {
      this.setSummaryExpense();
    });
  };
  setLivingExpense = (expense) => {
    this.setState({ living: expense }, () => {
      this.setSummaryExpense();
    });
  };
  setTravelExpense = (expense) => {
    this.setState({ travel: expense });
  };
  setEntExpense = (expense) => {
    this.setState({ ent: expense });
  };

  render() {
    return (
      <div>
        <div style={{ textAlign: "left", paddingTop: "10px" }}>
          <h2>Budget Planner </h2>
        </div>

        <div style={{ width: "50%" }}>
          <nav className=" navbar navbar-expand-lg bg-white">
            <ul className="navContent nav nav-underline fs-5">
              <li className=" nav-item">
                <NavLink className="nav-link" to="/budgetplanner/income">
                  Income
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/budgetplanner/housing">
                  Housing Expenses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/budgetplanner/living">
                  Living Expenses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/budgetplanner/travel">
                  Travel
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/budgetplanner/entertainment">
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/budgetplanner/summary">
                  Summary
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "left",
            paddingLeft: "5px",
          }}
        >
          {/*Left Side Outlet Component*/}
          <PlannerStateContext.Provider
            value={{
              summaryIncome: this.state.summaryIncome,
              summaryExpense: this.state.summaryExpense,
              setSummaryIncome: this.setSummaryIncome,
              setSummaryExpense: this.setSummaryExpense,
              setHousingExpense: this.setHousingExpense,
              setLivingExpense: this.setLivingExpense,
              setTravelExpense: this.setTravelExpense,
              setEntExpense: this.setEntExpense,
            }}
          >
            <div style={{ display: "flex", width: "50%" }}>
              <Outlet />
            </div>
          </PlannerStateContext.Provider>

          {/* Right Side Chart Component */}
          <div
            style={{
              display: "flex",
              backgroundColor: "white",
              width: "275px",
              height: "350px",
              outline: "2px solid black",
              borderRadius: "10px",
            }}
          >
            <div style={{ paddingLeft: "25px" }}>
              <h2>Summary</h2>
              <div
                style={{
                  width: "230px",
                  height: "75px",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "5px",
                  outline: "2px solid black",
                  marginBottom: "16px",
                }}
              >
                <p>Income </p> <p>{this.state.summaryIncome}</p>
              </div>
              <div
                style={{
                  width: "230px",
                  height: "75px",
                  backgroundColor: "#f5f5f5",
                  outline: "2px solid black",
                  borderRadius: "5px",
                  marginBottom: "16px",
                }}
              >
                <p>Expenses</p> <p>{this.state.summaryExpense}</p>
              </div>
              <div
                style={{
                  width: "230px",
                  height: "75px",
                  backgroundColor: "#f5f5f5",
                  outline: "2px solid black",
                  borderRadius: "5px",
                  marginBottom: "16px",
                }}
              >
                <p>Spare Cash </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
