import React, { Component } from "react";
import { PlannerStateContext } from "./PlannerStateContext";

export class HousingPlanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mortgage: 0,
      rent: 0,
      insurance: 0,
      taxes: 0,
      maintenance: 0,
    };
  }
  handleExpenseChange = (setHousingExpense) => {
    const { mortgage, rent, insurance, taxes, maintenance } = this.state;
    let total = mortgage + rent + insurance + taxes + maintenance;
    setHousingExpense(total);
  };
  handleInputChange = (event, setHousingExpense) => {
    const { name, value } = event.target;
    //Prevent Delete Key From setting NaN value
    const newValue = value === "" ? 0 : Number(value);

    this.setState(
      (prevState) => {
        return { [name]: parseFloat(newValue) };
      },
      () => {
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
                    name="mortgage"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setHousingExpense);
                      console.log("Mortgage", this.state.mortgage);
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
