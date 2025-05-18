import React, { Component } from "react";
import { PlannerStateContext } from "./PlannerStateContext";
export class LivingPlanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: 0,
      alcohol: 0,
      lunch: 0,
      coffee: 0,
      clothing: 0,
      shoes: 0,
      laundary: 0,
      toiletries: 0,
      dental: 0,
    };
  }
  handleExpenseChange = (setLivingExpense) => {
    const {
      groceries,
      alcohol,
      lunch,
      coffee,
      clothing,
      shoes,
      laundary,
      toiletries,
      dental,
    } = this.state;
    let total =
      groceries +
      alcohol +
      lunch +
      coffee +
      clothing +
      shoes +
      laundary +
      toiletries +
      dental;

    setLivingExpense(total);
  };
  handleInputChange = (event, setLivingExpense) => {
    const { name, value } = event.target;
    //Prevent Delete Key From setting NaN value
    const newValue = value === "" ? 0 : Number(value);

    this.setState(
      (prevState) => {
        return { [name]: parseFloat(newValue) };
      },
      () => {
        this.handleExpenseChange(setLivingExpense);
      }
    );
  };
  render() {
    return (
      <PlannerStateContext.Consumer>
        {({ setLivingExpense }) => (
          <div>
            <div style={{ textAlign: "left", paddingLeft: "5px" }}>
              <div>
                <h5>Groceries</h5>
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
                    name="groceries"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setLivingExpense);
                      console.log(this.state.groceries);
                    }}
                  />
                </div>
              </div>

              <div>
                <h5>Alcohol</h5>
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
                    name="alcohol"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setLivingExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Work Lunches</h5>
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
                    name="lunch"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setLivingExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Coffees</h5>
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
                    name="coffee"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setLivingExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Clothing</h5>
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
                    name="clothing"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setLivingExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Shoes</h5>
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
                    name="shoes"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setLivingExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Laundary</h5>
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
                    name="laundary"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setLivingExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Toiletries</h5>
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
                    name="toiletries"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setLivingExpense);
                    }}
                  />
                </div>
              </div>
              <div>
                <h5>Dental Care</h5>
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
                    name="dental"
                    type="number"
                    className="form-control"
                    aria-label="Amount"
                    aria-describedby="dollar-addon"
                    style={{ height: "50px", fontSize: "18px" }}
                    onChange={(event) => {
                      this.handleInputChange(event, setLivingExpense);
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
