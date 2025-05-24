import React, { Component } from "react";
import { PlannerStateContext } from "./PlannerStateContext";
export class LivingPlanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: localStorage.getItem("groceries") || "",
      alcohol: localStorage.getItem("alcohol") || "",
      lunch: localStorage.getItem("lunch") || "",
      coffee: localStorage.getItem("coffee") || "",
      clothing: localStorage.getItem("clothing") || "",
      shoes: localStorage.getItem("shoes") || "",
      laundary: localStorage.getItem("laundary") || "",
      toiletries: localStorage.getItem("toiletries") || "",
      dental: localStorage.getItem("dental") || "",
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
      (Number(groceries) || 0) +
      (Number(alcohol) || 0) +
      (Number(lunch) || 0) +
      (Number(coffee) || 0) +
      (Number(clothing) || 0) +
      (Number(shoes) || 0) +
      (Number(laundary) || 0) +
      (Number(toiletries) || 0) +
      (Number(dental) || 0);

    setLivingExpense(total);
  };
  handleInputChange = (event, setLivingExpense) => {
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
                    value={this.state.groceries}
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
                    value={this.state.alcohol}
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
                    value={this.state.lunch}
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
                    value={this.state.coffee}
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
                    valie={this.state.clothing}
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
                    value={this.state.shoes}
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
                    value={this.state.laundary}
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
                    value={this.state.toiletries}
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
                    value={this.state.dental}
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
