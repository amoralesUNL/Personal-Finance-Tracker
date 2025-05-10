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

        <div style={{ display: "flex", padding: "5px" }}>
          {/* Left: Render the selected component via Outlet */}
          <div style={{ flex: 1, paddingRight: "20px" }}>
            <Outlet />
          </div>

          {/* Right: Chart area */}
          <div style={{ flex: 1 }}>Bar chart here</div>
        </div>
      </div>
    );
  }
}
