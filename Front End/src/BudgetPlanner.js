import "./Styles.css";
import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
export class BudgetPlanner extends Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: "left", paddingTop: "10px" }}>
          <h2>Budget Planner </h2>
        </div>

        <div>
          <nav className=" navbar navbar-expand-lg bg-white">
            <ul className="navContent nav nav-underline fs-5">
              <li className=" nav-item">
                <NavLink className="nav-link" to="/budgetplanner/income">
                  Income
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/housingExpenses">
                  Housing Expenses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/housingExpenses">
                  Living Expenses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/housingExpenses">
                  Travel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/housingExpenses">
                  Entertainment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/housingExpenses">
                  Summary
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <Outlet />
      </div>
    );
  }
}
