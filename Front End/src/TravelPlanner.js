import React, { Component } from "react";
import { PlannerStateContext } from "./PlannerStateContext";
export class TravelPlanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fuel: 0,
      insurance: 0,
      loan: 0,
      maintenance: 0,
      parking: 0,
      fares: 0,
      train: 0,
      flight: 0,
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
      fuel + insurance + loan + maintenance + parking + fares + train + flight;
    setTravelExpense(total);
  };
  handleInputChange = (event, setTravelExpense) => {
    const { name, value } = event.target;
    const newValue = value === "" ? 0 : Number(value);
    this.setState(
      (prevState) => {
        return { [name]: parseFloat(newValue) };
      },
      () => {
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
