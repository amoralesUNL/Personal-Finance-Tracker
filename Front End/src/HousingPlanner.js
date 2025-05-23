import React, { Component } from "react";
import { PlannerStateContext } from "./PlannerStateContext";

export class HousingPlanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mortgage: localStorage.getItem("mortgage") || "",
      rent: localStorage.getItem("rent") || "",
      insurance: localStorage.getItem("insurance") || "",
      taxes: localStorage.getItem("taxes") || "",
      maintenance: localStorage.getItem("maintenance") || "",
    };
  }
  handleExpenseChange = (setHousingExpense) => {
    const { mortgage, rent, insurance, taxes, maintenance } = this.state;
    let total =
      (Number(mortgage) || 0) +
      (Number(rent) || 0) +
      (Number(insurance) || 0) +
      (Number(taxes) || 0) +
      (Number(maintenance) || 0);
    setHousingExpense(total);
  };
  handleInputChange = (event, setHousingExpense) => {
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

        this.handleExpenseChange(setHousingExpense);
      }
    );
  };

  render() {
    return (
      <PlannerStateContext.Consumer>
        {({ setHousingExpense }) => (
          <div>
            <div style={{ textAlign: "left", paddingLeft: "5px" }}>
              <div>
                <h5>Mortgage</h5>
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
                    value={this.state.mortgage}
                    name="mortgage"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setHousingExpense);
                    }}
                  />
                </div>
              </div>

              <div>
                <h5>Rent</h5>
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
                    value={this.state.rent}
                    name="rent"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setHousingExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Home Insurance</h5>
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
                      this.handleInputChange(event, setHousingExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Property Taxes</h5>
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
                    value={this.state.taxes}
                    name="taxes"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setHousingExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Home Maintenance</h5>
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
                      this.handleInputChange(event, setHousingExpense);
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
