import React, { Component } from "react";
import { PlannerStateContext } from "./PlannerStateContext";
export class TravelPlanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fuel: localStorage.getItem("fuel") || "",
      insurance: localStorage.getItem("insurance") || "",
      loan: localStorage.getItem("loan") || "",
      maintenance: localStorage.getItem("maintenance") || "",
      parking: localStorage.getItem("parking") || "",
      fares: localStorage.getItem("fares") || "",
      train: localStorage.getItem("train") || "",
      flight: localStorage.getItem("flight") || "",
    };
  }
  handleExpenseChange = (setTravelExpense) => {
    const {
      fuel,
      insurance,
      loan,
      maintenance,
      parking,
      fares,
      train,
      flight,
    } = this.state;
    let total =
      (Number(fuel) || 0) +
      (Number(insurance) || 0) +
      (Number(loan) || 0) +
      (Number(maintenance) || 0) +
      (Number(parking) || 0) +
      (Number(fares) || 0) +
      (Number(train) || 0) +
      (Number(flight) || 0);

    setTravelExpense(total);
  };
  handleInputChange = (event, setTravelExpense) => {
    const { name, value } = event.target;

    this.setState(
      (prevState) => {
        return { [name]: parseFloat(value) };
      },
      () => {
        if (value === "") {
          localStorage.removeItem(name);
        } else {
          localStorage.setItem(name, value);
        }
        this.handleExpenseChange(setTravelExpense);
      }
    );
  };
  render() {
    return (
      <PlannerStateContext.Consumer>
        {({ setTravelExpense }) => (
          <div>
            <div style={{ textAlign: "left", paddingLeft: "5px" }}>
              <div>
                <h5>Gas/Diesel/Charging</h5>
              </div>
              <div style={{ paddingBottom: "10px" }}>
                <div className="input-group" style={{ width: "220px" }}>
                  <span
                    className="input-group-text custom-addon-bg"
                    id="dollar-addon"
                  >
                    $
                  </span>
                  <input
                    value={this.state.fuel}
                    name="fuel"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setTravelExpense);
                    }}
                  />
                </div>
              </div>

              <div>
                <h5>Car Insurance</h5>
              </div>
              <div style={{ paddingBottom: "10px" }}>
                <div className="input-group" style={{ width: "220px" }}>
                  <span
                    className="input-group-text custom-addon-bg"
                    id="dollar-addon"
                  >
                    $
                  </span>
                  <input
                    value={this.state.insurance}
                    name="insurance"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setTravelExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Car Loan</h5>
              </div>
              <div style={{ paddingBottom: "10px" }}>
                <div className="input-group" style={{ width: "220px" }}>
                  <span
                    className="input-group-text custom-addon-bg"
                    id="dollar-addon"
                  >
                    $
                  </span>
                  <input
                    value={this.state.loan}
                    name="loan"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setTravelExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Maintenance</h5>
              </div>
              <div style={{ paddingBottom: "10px" }}>
                <div className="input-group" style={{ width: "220px" }}>
                  <span
                    className="input-group-text custom-addon-bg"
                    id="dollar-addon"
                  >
                    $
                  </span>
                  <input
                    value={this.state.maintenance}
                    name="maintenance"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setTravelExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Parking</h5>
              </div>
              <div style={{ paddingBottom: "10px" }}>
                <div className="input-group" style={{ width: "220px" }}>
                  <span
                    className="input-group-text custom-addon-bg"
                    id="dollar-addon"
                  >
                    $
                  </span>
                  <input
                    value={this.state.parking}
                    name="parking"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setTravelExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Bus/Tram fares</h5>
              </div>
              <div style={{ paddingBottom: "10px" }}>
                <div className="input-group" style={{ width: "220px" }}>
                  <span
                    className="input-group-text custom-addon-bg"
                    id="dollar-addon"
                  >
                    $
                  </span>
                  <input
                    value={this.state.fares}
                    name="fares"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setTravelExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Train</h5>
              </div>
              <div style={{ paddingBottom: "10px" }}>
                <div className="input-group" style={{ width: "220px" }}>
                  <span
                    className="input-group-text custom-addon-bg"
                    id="dollar-addon"
                  >
                    $
                  </span>
                  <input
                    value={this.state.train}
                    name="train"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setTravelExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Flight Expenses</h5>
              </div>
              <div style={{ paddingBottom: "10px" }}>
                <div className="input-group" style={{ width: "220px" }}>
                  <span
                    className="input-group-text custom-addon-bg"
                    id="dollar-addon"
                  >
                    $
                  </span>
                  <input
                    value={this.state.flight}
                    name="flight"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setTravelExpense);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </PlannerStateContext.Consumer>
    );
  }
}
